/**
 * @param { String } name [储存的名字]
 * @param { String } content [储存的值]
 *
 */

//储存
export const setStorage = (name, content) => {
    if (!name) {
        return
    }
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}


//获取
export const getStorage = name => {
    if (!name) {
        return
    }
    return window.localStorage.getItem(name)
}


//删除
export const removeStroage = name => {
    if (!name) {
        return
    }
    window.localStorage.removeItem(name)
}