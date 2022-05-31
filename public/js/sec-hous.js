// 操作List
(function () {
    const hous = document.querySelectorAll("#root .housList .List .item .hous");
    for (let i = 0; i < hous.length; i++) {
        let index = i;
        if (i < 10) {
            index = "0" + i;
        }
        hous[i].innerHTML = `${index}:00`;
    }
})();