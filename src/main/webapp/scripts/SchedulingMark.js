option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '调度评分',
            type: 'gauge',
            detail: {formatter:'{value}'},
            data: [{value: 50, name: '调度效果'}]
        }
    ]
};

var myChart = echarts.init(document.getElementById('main'));

setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
},2000);
