const axios = require("axios").default;
// 操作nearby今明两天的DOM
(async function () {
    const data = (await axios.get("https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=95421747&appsecret=A7JdBTES")).data
    const nearby = document.querySelector("#root .nearby");
    for (let i = 0; i < 2; i++) {
        const ning = nearby.querySelectorAll(".ning");
        ning[i].querySelectorAll("div")[0].querySelectorAll("p")[1].innerHTML = `${data.data[i].tem1}/${data.data[i].tem2}`
        let tq = data.data[i].wea;
        if (data.data[i].wea_day !== data.data[i].wea_night) {
            tq = `${data.data[i].wea_day}转${data.data[i].wea_night}`
        }
        ning[i].querySelectorAll("div")[1].querySelectorAll("p")[0].innerHTML = tq;
    }
    console.log(data);
})();