import { extend } from './util'

export default class ImgMap {
    constructor() {
        this.$map = $('.fp-img-map');
        this.$img = this.$map.find('img');
        this.$text = this.$map.find('.map-text');
        this.$btn = $('#refreshBtn');
    }

    init() {
        this.getData();
    }

    getData() {
        $.get('http://localhost:3000/api/imgmap')
            .done(data => {
                data = JSON.parse(data);
                data.forEach(item => {
                    let img = new Image();
                    img.src = item.src;
                });
            })
            .then(data => {
                data = JSON.parse(data);
                let copyData = extend([], data);
                let resultData = [];
                let mapImg = this.$img.toArray();
                let mapText = this.$text.toArray();

                let imgCount = mapImg.length;
                for (let i = 0; i < imgCount; i++) {
                    let index = Math.floor(Math.random() * copyData.length);
                    resultData = resultData.concat(copyData.splice(index, 1));
                }

                mapImg.forEach((item, index) => {
                    item.src = resultData[index].src;
                });
                mapText.forEach((item, index) => {
                    $(item).find('.map-name').text(resultData[index].name);
                    $(item).find('.map-major').text(resultData[index].major);
                });

                this.$btn.on('click', e => {
                    e.preventDefault();

                    // TODO: 代码复用
                    let copyData = extend([], data);
                    let resultData = [];
                    let imgCount = mapImg.length;
                    for (let i = 0; i < imgCount; i++) {
                        let index = Math.floor(Math.random() * copyData.length);
                        resultData = resultData.concat(copyData.splice(index, 1));
                    }

                    mapImg.forEach((item, index) => {
                        item.src = resultData[index].src;
                    });
                    mapText.forEach((item, index) => {
                        $(item).find('.map-name').text(resultData[index].name);
                        $(item).find('.map-major').text(resultData[index].major);
                    });
                });
            })
    }
}