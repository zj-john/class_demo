const setAttr = function(dom, obj) {
    for(k in obj) {
        dom.setAttribute(k, obj[k]);
    }
}

const setStyle = function(dom ,obj) {
    for(k in obj) {
        dom.style[k] = obj[k]
    }
}

module.exports = { setAttr, setStyle };