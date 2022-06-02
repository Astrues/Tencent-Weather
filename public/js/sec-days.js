const axios = require("axios").default;
import * as echarts from 'echarts'
(async function () {
    // 调用接口修改数据
    const data = (await axios.get("https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=95421747&appsecret=A7JdBTES&ext=&cityid=")).data;
    const days = document.querySelectorAll("#root .days .item");
    // li里面太复杂了，不如直接写
    for (let i = 0; i < data.data.length; i++) {
        let d = data.data[i];
        let day = d.date.split("-");
        days[i].querySelector(".top .date").innerHTML = `${day[1]}/${day[2]}`;
        days[i].querySelector(".top .tq p").innerHTML = d.wea_day;
        days[i].querySelector(".top .tq img").src = `./images/day/${d.wea_day_img}.png`
        days[i].querySelector(".bottom .tq img").src = `./images/night/${d.wea_night_img}.png`
        days[i].querySelector(".bottom .tq p").innerHTML = d.wea_night;
        days[i].querySelectorAll(".bottom .wind p")[0].innerHTML = d.win[1];
        days[i].querySelectorAll(".bottom .wind p")[1].innerHTML = d.win_speed.split("<").join("");
    }
    // 存储早晚温度的数组
    let arrDay = [];
    let arrNight = [];
    for (let i = 0; i < data.data.length; i++) {
        let d = data.data[i];
        arrDay.push(d.tem1);
        arrNight.push(d.tem2);
    }
    // Echarts图表
    // 基于准备好的dom，初始化echarts实列
    const myChart = echarts.init(document.querySelector("#root .days .Echarts"));
    // 绘制图表
    myChart.setOption({
        xAxis: {
            type: 'category',
            // data: ['A', 'B', 'C'],
            show: false,

        },
        yAxis: {
            type: 'value',
            show: false,
        },
        series: [
            {
                data: arrDay,
                type: 'line',
                label: {
                    show: true,
                    position: "top",
                    textStyle: {
                        fontSize: 16
                    },
                    formatter: function (data) {
                        return data.value + "°"
                    },
                },
            },
            {
                data: arrNight,
                type: 'line',
                label: {
                    show: true,
                    position: "bottom",
                    textStyle: {
                        fontSize: 16
                    },
                    formatter: function (data) {
                        return data.value + "°"
                    }
                },
            },

        ]
    });
})(); 