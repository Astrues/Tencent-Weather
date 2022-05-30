const axios = require("axios").default;
const xhr = new XMLHttpRequest();
// 通过 axios 调用接口函数
function res(api) {
    let data = axios({
        method: "GET",
        url: `https://v0.yiketianqi.com/free${api}`,
    })
    return data;
}
export { res }
