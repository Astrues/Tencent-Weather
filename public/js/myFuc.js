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
        console.log(1);
        t = '0' + t;
    }
    return t;
}
export { res, time }
