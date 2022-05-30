import { res } from './myFuc'
// 判断时间选择背景图片和渐变色
(function () {
    const header = document.querySelector("#root .main header");
    const bgs = document.querySelectorAll("#root .main header .bg .layer");
    console.log(bgs[0].style);
    const hous = new Date().getHours();
    console.log(hous);
    if (hous >= 6 && hous <= 18) {
        header.style.background = "linear-gradient(45deg,#3bbcff,#4af4ff)"
        bgs[0].style.backgroundImage = "url('../images/bg01.png')"
        bgs[1].style.backgroundImage = "url('../images/bg02.png')"
        bgs[2].style.backgroundImage = "url('../images/bg03.png')"
    }
})();

// 调用接口修改头部的数据
(async function () {
    const data = await (await res('/day?appid=95421747&appsecret=A7JdBTES&unescape=1')).data
    console.log(data);
    const header = document.querySelector("#root .main header");
    header.querySelector(".top .location").innerHTML = `<span></span> ${data.city}`
    header.querySelector(".middle .c").innerHTML = `${data.tem}°`
    header.querySelector(".middle .tq").innerHTML = `${data.wea}`
    const lis = header.querySelectorAll(".middle .other li");
    lis[0].innerHTML = `湿度 ${data.humidity}`
    lis[1].innerHTML = `${data.win} ${data.win_speed}`
})();

// 打开关闭空气卡片
(function () {
    const air_s = document.querySelector("#root .main header .air-small");
    const air_b = document.querySelector("#root .main header .air-big");
    const shadow = document.querySelector("#root .main header .shadow");
    air_s.addEventListener("click", () => {
        air_b.style.display = 'block';
        shadow.style.display = 'block';
    })
    shadow.addEventListener("click", () => {
        air_b.style.display = 'none';
        shadow.style.display = 'none';
    })
    air_b.querySelector(".airtop a").addEventListener("click", () => {
        air_b.style.display = 'none';
        shadow.style.display = 'none';
    })
})();