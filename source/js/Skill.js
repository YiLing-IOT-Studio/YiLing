export default class Skill {
    constructor() {
        this.$map = $('#skillMap');
        this.chart = echarts.init(this.$map[0]);
    }

    init() {
        this.chart.showLoading();
        this.getData();
    }

    getData() {
        $.get('http://localhost:3000/api/skill')
            .done(data => {
                this.chart.hideLoading();
                this.chart.setOption({
                    title: {
                        text: '技能云图 by 翼灵',
                        link: '',
                        x: 'right',
                        y: 'bottom',
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    backgroudColor: '#f7f7f7',
                    tooltip: {
                        show: false
                    },
                    animation: true,
                    series: [{
                        name: '技能云图',
                        type: 'wordCloud',
                        gridSize: 12,
                        sizeRange: [10, 50],
                        rotationRange: [-45, 90],
                        autoSize: {
                            enable: true,
                            minSize: 6
                        },
                        textStyle: {
                            normal: {
                                color: function() {
                                    return 'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') + ')';
                                }
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        data: JSON.parse(data)
                    }]
                })
            });
        this.chart.on('click', params => {
            $('#skillModal').find('.modal-title').text(params.name);
            $('#skillModal').modal('show');
        })
    }
}