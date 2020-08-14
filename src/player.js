var AudioContext = window.AudioContext // Default
    || window.webkitAudioContext // Safari and old versions of Chrome
    || false; 

if (!AudioContext) {
    alert("Unable to use audio context. Use a modern browser plz.")
}

let audioContext = new AudioContext()


const localCache = {};
//const audioCache = {};

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
    } else {
        buffer = await getBuffer(url);
        localCache[url] = buffer;
    }
    playAudio(buffer, audioContext);
}
/*
async function play_audio(url) {
    let audio;
    console.log("Playing")
    if (Object.prototype.hasOwnProperty.call(audioCache, url)) {
        audio = localCache[url];
    } else {
        audio = new Audio();
        audio.preload = "auto";
        audioCache[url] = audio
        audio.src = url;
    }
    try {
        let playPromise = audio.play();
        console.log(playPromise)
    } catch (e) {
        console.log("Error while playing the audio requested")
        console.error(e)
    }
}
*/
export { play };