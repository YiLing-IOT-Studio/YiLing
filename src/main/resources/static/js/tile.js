window.onload = function() {
    pageInit();
}

function pageInit() {
    var date = document.getElementsByClassName('tile-date')[0];
    var week = document.getElementsByClassName('date-week')[0];
    var day = document.getElementsByClassName('date-day')[0];
    var now = new Date();
    var zhArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    week.innerHTML = zhArr[now.getDay()];
    day.innerHTML = now.getDate();

    var tileWeather = document.getElementsByClassName('tile-weather')[0];
    var weather = document.getElementsByClassName('weather')[0];
    var temp = document.getElementsByClassName('temp')[0];
    var tempCur = document.getElementsByClassName('temp-cur')[0];
    var tempMax = document.getElementsByClassName('temp-max')[0];
    var tempMin = document.getElementsByClassName('temp-min')[0];
    var city = document.getElementsByClassName('city')[0];

    $.ajax({
        type: 'POST',
        url: 'https://free-api.heweather.com/v5/weather?city=104.065735,30.659462&key=af6d493a322b49de967311ebd12de49f',
        dataType: 'json',
        success: function(data) {
            weather.innerHTML = data.HeWeather5[0].now.cond.txt;
            city.innerHTML = data.HeWeather5[0].basic.city;
            tempCur.innerHTML = data.HeWeather5[0].now.tmp + '°C';
            tempMax.innerHTML = data.HeWeather5[0].daily_forecast[0].tmp.max + '°C';
            tempMin.innerHTML = data.HeWeather5[0].daily_forecast[0].tmp.min + '°C';
        },
        error: function() {
            temp.innerHTML = '天气获取失败...';
        }
    });

    var newsCon = document.getElementsByClassName('news-con')[0];
    var newsContent = '第五届道惟尔杯物联网创意大赛完满闭幕，余文轩《智能拐杖》荣获特等奖';
    if (newsContent.length > 27) {
        newsContent = newsContent.substr(0, 27) + '...';
    }
    newsCon.innerHTML = newsContent;
}