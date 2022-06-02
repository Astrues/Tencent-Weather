import { time, weaDay, weaNight } from "./myFuc";
const axios = require("axios").default;
// 操作List
(async function () {
    const housList = document.querySelector("#root .housList .List");
    const data = await (await (axios.get("https://v0.yiketianqi.com/api?unescape=1&version=v63&appid=95421747&appsecret=A7JdBTES"))).data;
    const h = time(new Date().getHours());
    const m = time(new Date().getMinutes());
    const nearTime = `${h}:00`;
    const nowTime = `${h}:${m}`
    for (let i = 0; i < data.hours.length; i++) {
        const li = document.createElement("li");
        li.className = 'item'
        for (let i = 0; i < 3; i++) {
            const p = document.createElement("p");
            li.appendChild(p)
        }
        housList.appendChild(li)
        housList.querySelectorAll(".item")[i].querySelectorAll("p")[0].className = 'hous';
        housList.querySelectorAll(".item")[i].querySelectorAll("p")[1].className = 'tq';
        housList.querySelectorAll(".item")[i].querySelectorAll("p")[2].className = 't';
    }
    for (let i = 0; i < data.hours.length; i++) {
        housList.querySelectorAll(".item .hous")[i].innerHTML = data.hours[i].hours;
        housList.querySelectorAll(".item .tq")[i].style.backgroundImage = weaDay(data.hours[i].wea)
        housList.querySelectorAll(".item .t")[i].innerHTML = data.hours[i].tem + "°";
    }
    // 把第一个设置为确切时间
    housList.querySelectorAll(".item .hous")[0].innerHTML = nowTime;
})();