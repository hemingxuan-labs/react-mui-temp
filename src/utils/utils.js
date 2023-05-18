export const walletAvatarNumberc = (assets) => {
    if (!assets || assets === '') return ''
    return parseInt(assets.slice(2, 10), 16)
}
// 结构请求参数
export const objToUrl = (obj) => {
    const tempArray = []
    for (const item in obj) {
        if (item) {
            tempArray.push(`${item}=${obj[item]}`)
        }
    }
    return `?${tempArray.join('&')}`
}
// 获取某一个参数值
export const getQueryString = (name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return unescape(r[2])
    }
    return null
}
// 复制方法
export const copyTextToClipboard = (text, cb) => {
    navigator.clipboard.writeText(text).then(() => {
        if (cb) cb()
    })
}
