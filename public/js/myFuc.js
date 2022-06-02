const axios = require("axios").default;
// 通过 axios 调用接口函数
function res(api) {
    let data = axios({
        method: "GET",
        url: `https://v0.yiketianqi.com/free${api}`,
    })
    return data;
}
// 补零函数
function time(t) {
    if (t < 10) {
        t = '0' + t;
    }
    return t;
}
// 通过传入的字符传返回对应的图片 白天
function weaDay(str) {
    let imgPath = '';
    switch (str) {
        case '多云':
            imgPath = 'url(../images/day/yun.png)'
            break;
        case '小雨':
            imgPath = 'url(../images/day/yu.png)'
            break;
        case '阴':
            imgPath = 'url(../images/day/yin.png)'
            break;
        case '晴':
            imgPath = 'url(../images/day/qing.png)'
            break;
        default:
            break;
    }
    return imgPath
}
// 通过传入的字符传返回对应的图片 晚上
function weaNight(str) {
    let imgPath = '';
    switch (str) {
        case '多云':
            imgPath = 'url(../images/night/yun.png)'
            break;
        case '小雨':
            imgPath = 'url(../images/night/yu.png)'
            break;
        case '阴':
            imgPath = 'url(../images/night/yin.png)'
            break;
        case '晴':
            imgPath = 'url(../images/night/qing.png)'
            break;
        default:
            break;
    }
    return imgPath
}
export { res, time, weaDay, weaNight }
