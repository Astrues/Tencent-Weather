(function () {
    const location = document.querySelector("#root .main header .top .location");
    const sec_city = document.querySelector("#root .sec-city");
    const btn_cancel = document.querySelector("#root .sec-city .search .btn-cancel")
    console.log(location);
    location.addEventListener("click", () => sec_city.style.display = 'block')
    btn_cancel.addEventListener("click", () => sec_city.style.display = 'none')
})()