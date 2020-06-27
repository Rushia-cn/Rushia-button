const audioContext = new AudioContext();
const localCache = {};
const playAudio = function (buffer) {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start();
};

const getBuffer = function (url) {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';
        request.onload = () => {
            audioContext.decodeAudioData(request.response, buffer => buffer ? resolve(buffer) : reject('decoding error'));
        };
        request.onerror = error => reject(error);
        request.send();
    });
};

async function play(url) {
    let buffer;
    if (Object.prototype.hasOwnProperty.call(localCache, url)) {
        buffer = localCache[url];
    }
    else {
        buffer = await getBuffer(url);
        localCache[url] = buffer;
    }
    buffer && playAudio(buffer, audioContext);
}

export default play;
