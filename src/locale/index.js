function importAll(r) {
    let __modules = {}
    r.keys().forEach(key => {
        const result = key.match(/\.\/(\S{2})\.js/)
        if (result != null) __modules[result[1]] = r(key).default
    });
    return __modules
}

export default importAll(require.context('./', false, /\.js$/))