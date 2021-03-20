window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                const object = name//只是给name一个别名，让代码看起来更符合常识
                for (let key in object) {
                    node.style[key] = object[key]
                    //注:key是个变量，不能用.key获取，因为这样浏览器会将key变成字符串。
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}