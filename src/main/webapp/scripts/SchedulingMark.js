var option = {
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
            data: [{value: 5, name: '调度效果评分'}]
        }
    ]
};

var initValue = 60;

var myChart = echarts.init(document.getElementById('main'));
var startInterval = setInterval(function () {
    if(option.series[0].data[0].value < initValue)
    option.series[0].data[0].value += Math.floor(Math.random()*10);
    myChart.setOption(option, true);
},250);
//window.clearInterval(startInterval);


var option2 = {
    title: {
        text: '调度拓扑图'
    },
    tooltip: {},
    animationDurationUpdate: 5500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 80,
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: 'Pod1',
                x: 100,
                y: 100
            }, {
                name: 'Pod2',
                x: 100,
                y: 300
            }, {
                name: 'Pod3',
                x: 100,
                y: 550
            }, {
                name: 'Kube-master',
                x: 550,
                y: 100
            },{
                name: 'Kube-node1',
                x: 550,
                y: 300
            },{
                name: 'Kube-node2',
                x: 550,
                y: 550
            }],
            // links: [],
            links: [ {
                source: 'Pod1',
                target: 'Kube-node1'
            }, {
                source: 'Pod2',
                target: 'Kube-node1'
            }, {
                source: 'Pod3',
                target: 'Kube-node1'
            }, {
                source: 'Pod3',
                target: 'Kube-node2'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 5,
                    curveness: 0.1
                }
            }
        }
    ]
};

var option3 = {
    title: {
        text: '调度拓扑图'
    },
    tooltip: {},
    animationDurationUpdate: 5500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 80,
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: 'Pod1',
                x: 100,
                y: 100
            }, {
                name: 'Pod2',
                x: 100,
                y: 300
            }, {
                name: 'Pod3',
                x: 100,
                y: 550
            }, {
                name: 'Kube-master',
                x: 550,
                y: 100
            },{
                name: 'Kube-node1',
                x: 550,
                y: 300
            },{
                name: 'Kube-node2',
                x: 550,
                y: 550
            }],
            // links: [],
            links: [ {
                source: 'Pod1',
                target: 'Kube-node1'
            },{
                source: 'Pod1',
                target: 'Kube-master'
            }, {
                source: 'Pod2',
                target: 'Kube-master'
            },  {
                source: 'Pod2',
                target: 'Kube-node2'
            },{
                source: 'Pod3',
                target: 'Kube-node1'
            }, {
                source: 'Pod3',
                target: 'Kube-node2'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 5,
                    curveness: 0.1
                }
            }
        }
    ]
};

var myChart2 = echarts.init(document.getElementById('graph'));
myChart2.setOption(option2, true);

var reset2Graph = function(){
    window.clearInterval(startInterval);
    initValue = 80;
    option.series[0].data[0].value = 0;
    myChart.setOption(option, true);
    setInterval(function () {
        if(option.series[0].data[0].value < initValue)
            option.series[0].data[0].value += Math.floor(Math.random()*10);
        myChart.setOption(option, true);
    },250);
    myChart2.setOption(option3, true);
}