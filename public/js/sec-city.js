const { Input } = require("postcss");

// 地区选择与隐藏
(function () {
    const location = document.querySelector("#root .main header .top .location");
    const sec_city = document.querySelector("#root .sec-city");
    const btn_cancel = document.querySelector("#root .sec-city .search .btn-cancel")
    location.addEventListener("click", () => sec_city.style.display = 'block')
    btn_cancel.addEventListener("click", () => sec_city.style.display = 'none')
})();

// 城市历史记录和搜索
(function () {
    const cityLis = document.querySelectorAll("#root .sec-city .hot-city .cityList li");
    const cityList = document.querySelector("#root .sec-city .hot-city .city-history .cityList");
    const clear = document.querySelector("#root .sec-city .hot-city .city-history .clear");
    const cityArr = [];
    // const newCity = Array.from(new Set(cityArr))

    // 点击后将城市存储到localStorage里面
    for (let i = 0; i < cityLis.length; i++) {
        cityLis[i].addEventListener("click", () => {
            let key = new Date().valueOf();
            let value = cityLis[i].textContent;
            // 点谁谁放第一个然后直接Set去重
            cityArr.unshift(value)
            const newArr = Array.from(new Set(cityArr));
            for (let i = 0; i < newArr.length; i++) {
                localStorage.setItem(i, newArr[i])
            }
            cityList.innerHTML = '';
            console.log(cityList);
            for (let i = 0; i < localStorage.length; i++) {
                let li = document.createElement('li');
                let key = localStorage.key(i);
                let value = localStorage.getItem(key)
                li.innerHTML = value;
                cityList.appendChild(li);
            }
        })
    }
    // 判断localStorage里面是否存在数据
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            let li = document.createElement("li");
            li.innerHTML = value;
            cityList.appendChild(li);
        }
    }
    // 点击小爱心删除数据
    clear.addEventListener("click", () => {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            localStorage.removeItem(key)
        }
        cityList.innerHTML = '';
    })
})();