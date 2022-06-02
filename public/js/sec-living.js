const axios = require("axios").default;
// 触摸滑动
(async function () {
    // const data = (await axios.get("https://v0.yiketianqi.com/api?unescape=1&version=v63&appid=95421747&appsecret=A7JdBTES")).data;
    // console.log(data);
    // big.addEventListener("touchstart", (start) => {
    //     big.addEventListener("touchend", (end) => {
    //         let x = start.changedTouches[0].screenX - end.changedTouches[0].screenX
    //         if (x > 60) {
    //             big.style.left = -100 + "%";
    //             console.log(111);
    //         }
    //         else if (x < 60) {
    //             big.style.left = 0;
    //         } else {
    //             let left = big.style.left;
    //             big.style.left = left;
    //         }

    //     })
    // })

    const live = document.querySelector(".living")
    const items = document.querySelectorAll("#root .living .big .item");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", () => {
            live.querySelector(".shadow").style.display = "block"
            live.querySelector(".card").style.display = "block"
        })
    }
    live.querySelector(".card button").addEventListener("click", () => {
        live.querySelector(".shadow").style.display = "none"
        live.querySelector(".card").style.display = "none"
    })
    live.querySelector(".shadow").addEventListener("click", () => {
        live.querySelector(".shadow").style.display = "none"
        live.querySelector(".card").style.display = "none"
    })
})();