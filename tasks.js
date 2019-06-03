module.exports = {
    getListenerNames
}

function getListenerNames(listeners){
    const names = []
    listeners.forEach(listener => {
        if(listener.name !== undefined)
        names.push(listener.name)
    });
    return names.join(', ')
}
