$(document).ready(function() {
    $('#fullpage').fullpage({

        //Navigation
        lockAnchors: false,
        anchors: ['signin', 'welcome', 'learn', 'ExcellentMan', 'JoinUs', 'AboutUs'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['signin', 'welcome', 'learn', 'ExcellentMan', 'JoinUs', 'AboutUs'],
        showActiveTooltip: false,

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '.yl-location',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Design
        verticalCentered: true,
        resize: true,
        sectionsColor: ['#1bbc9b', 'whitesmoke', '#7BAABE', 'whitesmoke', '#4BBFC3', '#ccddff'],
        sectionsColor: ['#ccddff', '#ccddff', '#ccddff', '#ccddff', '#ccddff', '#ccddff'],
        paddingTop: '5em',
        paddingBottom: '10px',
        fixedElements: '.header, .footer',
        parallaxOptions: {
            type: 'reveal',
            percentage: 62,
            property: 'translate'
        },

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        afterLoad: function(anchorLink, index) {
            var moveCount = 0;
            var randomAnimCount = 0;
            var wwuCount = 0;
            if (index === 1) {
                $('.yl-intro').html(`<div><span class="lead">翼灵物联工作室</span> - 一支追求技术、开发与自由的大学生团队。</div>
                <div class="yl-translation">YiLing-ers pursue technology, openness and freedom.</div>`);
                $('.h2, .h5, .yl-intro, .btn-group').addClass('animated fadeIn');
                $('.sec-body-for-login').html(`<a class="btn btn-success" href="/signDetail" target="_blank" class="yl-website-link text-center">
                    <span class="website-info">前往签到系统</span>
                </a>`);
            }
            if (index === 2) {
                // setTimeout(function() { $('#pageloading').addClass('pageloaded') }, 0);
                (function() {
                    function anim() {
                        move('.swiper-img.img1')
                            .set('top', '0px')
                            .duration('2s')
                            .delay('2s')
                            .end(function() {
                                move('.swiper-img.img1')
                                    .set('top', '-318px')
                                    .duration('2s')
                                    .delay('2s')
                                    .end();
                                move('.swiper-img.img2')
                                    .set('top', '0px')
                                    .duration('2s')
                                    .delay('2s')
                                    .end(function() {
                                        move('.swiper-img.img2')
                                            .set('top', '-318px')
                                            .duration('2s')
                                            .delay('2s')
                                            .end();
                                        move('.swiper-img.img3')
                                            .set('top', '0px')
                                            .duration('2s')
                                            .delay('2s')
                                            .end(function() {
                                                move('.swiper-img.img3')
                                                    .set('top', '-318px')
                                                    .duration('2s')
                                                    .delay('2s')
                                                    .end();
                                                move('.swiper-img.img4')
                                                    .set('top', '0px')
                                                    .duration('2s')
                                                    .delay('2s')
                                                    .end(function() {
                                                        move('.swiper-img.img4')
                                                            .set('top', '318px')
                                                            .duration('2s')
                                                            .delay('2s')
                                                            .end();
                                                        move('.swiper-img.img3')
                                                            .set('top', '0px')
                                                            .duration('2s')
                                                            .delay('2s')
                                                            .end(function() {
                                                                move('.swiper-img.img3')
                                                                    .set('top', '318px')
                                                                    .duration('2s')
                                                                    .delay('2s')
                                                                    .end();
                                                                move('.swiper-img.img2')
                                                                    .set('top', '0px')
                                                                    .duration('2s')
                                                                    .delay('2s')
                                                                    .end(function() {
                                                                        move('.swiper-img.img2')
                                                                            .set('top', '318px')
                                                                            .duration('2s')
                                                                            .delay('2s')
                                                                            .end();
                                                                        move('.swiper-img.img1')
                                                                            .set('top', '0px')
                                                                            .duration('2s')
                                                                            .delay('2s')
                                                                            .end(function() {
                                                                                move('.swiper-img.img1')
                                                                                    .set('top', '318px')
                                                                                    .duration('2s')
                                                                                    .delay('2s')
                                                                                    .end();
                                                                            });
                                                                    })
                                                            })
                                                    })
                                            })
                                    });
                            });
                        moveCount++;
                        if (moveCount < Infinity) {
                            setTimeout(anim, 60000);
                        } else {
                            location.reload();
                        }
                    }
                    var timer = null;
                    timer = setTimeout(anim, 1000);
                })();

                (function() {
                    var timer = null;
                    var randomNum;

                    var tileCon = document.getElementsByClassName('tile-con')[2];
                    var tileItems = tileCon.getElementsByClassName('tile-item');
                    var tileImgs = tileCon.getElementsByClassName('tile-img');
                    var tileItemsLen = tileItems.length;

                    function randomAnimation() {
                        randomNum = parseInt(Math.random() * 8);
                        //console.log(randomNum);

                        switch (randomNum) {
                            case 0:
                                //console.log('item0');
                                doSetTimeout(randomNum);
                                break;
                            case 1:
                                //console.log('item1');
                                doSetTimeout(randomNum);
                                break;
                            case 2:
                                //console.log('item2');
                                doSetTimeout(randomNum);
                                break;
                            case 3:
                                //console.log('item3');
                                doSetTimeout(randomNum);
                                break;
                            case 4:
                                //console.log('item4');
                                // rotateAnim(randomNum);
                                break;
                            case 5:
                                //console.log('item5');
                                doSetTimeout(randomNum);
                                break;
                            case 6:
                                //console.log('item6');
                                doSetTimeout(randomNum);
                                break;
                            case 7:
                                //console.log('item7');
                                doSetTimeout(randomNum);
                                break;
                            default:
                                //console.log('default animation');
                                doSetTimeout(randomNum);
                                break;
                        }
                    }

                    function doSetTimeout(num) {
                        // console.log(num);
                        var tileItem = tileItems[num];
                        //console.log(tileItem);
                        var tileItemCon = tileItem.getElementsByClassName('tile-item-content')[0];
                        //console.log(tileItemCon);
                        var tileImg = tileItemCon.getElementsByTagName('img');
                        //console.log(tileImg);

                        function rotate3d() {
                            tileItemCon.style.transform = 'rotateX(90deg)';
                        }

                        function rotate3dReverse() {
                            tileItemCon.style.transform = 'rotateX(0deg)';
                        }
                        if (tileItem.flag) {
                            if (tileItem.imgFlag1) {
                                tileImg[1].src = tileItem.imgs[1][0];
                                tileItem.imgFlag1 = false;
                            } else {
                                tileImg[1].src = tileItem.imgs[1][1];
                                tileItem.imgFlag1 = true;
                            }
                            rotate3d();
                            tileItem.flag = false;
                        } else {
                            if (tileItem.imgFlag2) {
                                tileImg[0].src = tileItem.imgs[0][0];
                                tileItem.imgFlag2 = false;
                            } else {
                                tileImg[0].src = tileItem.imgs[0][1];
                                tileItem.imgFlag2 = true;
                            }
                            rotate3dReverse();
                            tileItem.flag = true;
                        }

                        randomAnimCount++;
                        if (randomAnimCount < Infinity) {
                            setTimeout(randomAnimation, 5000);
                        } else {
                            location.reload();
                        }
                    }

                    timer = setTimeout(randomAnimation, 5000);

                    for (var i = 0; i < tileItemsLen; i++) {
                        (function(i) {
                            tileItems[i].flag = true;
                            tileItems[i].imgFlag1 = true;
                            tileItems[i].imgFlag2 = true;
                            EventUtil.addHandler(tileItems[i], 'mouseover', function() {
                                clearTimeout(timer);
                            });
                            EventUtil.addHandler(tileItems[i], 'mouseout', function() {
                                timer = setTimeout(randomAnimation, 5000);
                            });
                        }(i));
                    }

                    tileItems[0].imgs = [
                        [' img/frontend/fe_liyoubo_200x200.jpg', ' img/frontend/fe_liwenfei_200x200.jpg'],
                        [' img/frontend/fe_zhoudeng.jpg', ' img/frontend/fe_caoxuemei_200x200.jpg']
                    ];
                    tileItems[1].imgs = [
                        [' img/backend/be_xiongxiaoyu_200x200.jpg', ' img/backend/be_jinglili_200x200.jpg'],
                        [' img/backend/be_wangping_200x200.jpg', ' img/backend/be_zhanghaiyang_200x200.jpg']
                    ];
                    tileItems[2].imgs = [
                        [' img/glory/ji-suan-ji-she-ji-da-sai-yi-deng-jiang-200x200.jpg', ' img/glory/wu-lian-wang-she-ji-jing-sai-200x200.jpg'],
                        [' img/glory/wu-lian-wang-she-ji-jing-sai-2-200x200.jpg', ' img/glory/wu-lian-wang-she-ji-jing-sai-3-200x200.jpg']
                    ];
                    tileItems[3].imgs = [
                        [' img/embedded/em_yigangxi_200x200.jpg', ' img/embedded/em-chengmiaohong-200x200.jpg'],
                        [' img/embedded/em_jifengtao_200x200.jpg', ' img/embedded/em_duyu_200x200.jpg']
                    ];
                    tileItems[5].imgs = [
                        [' img/android/an_tangguangsheng_200x200.jpg', ' img/android/an_zengxinrui_200x200.jpg'],
                        [' img/android/an_songqifei_200x200.jpg', ' img/android/an_duzeming_200x200.jpg']
                    ];
                    tileItems[6].imgs = [
                        [' img/newMembers/new_fenglei_200x200.jpg', ' img/newMembers/new_xiaoyaqiong_200x200.jpg'],
                        [' img/newMembers/new_xiongcheng_200x200.jpg', ' img/newMembers/new_pengzhen_200x200.jpg']
                    ];
                    tileItems[7].imgs = [
                        [' img/project/xun-che-xi-tong-200x200.jpg', ' img/project/zhi-neng-an-quan-xie-200x200.jpg'],
                        [' img/project/wei-xin-xiao-cheng-xu-200x200.jpg', ' img/project/zhi-neng-xiao-che-200x200.jpg']
                    ];
                })();
                (function() {
                    var tileItems = document.getElementsByClassName('tile-item-js');
                    var tileItemsLen = tileItems.length;
                    var tileImgs = [];

                    var timer = null;

                    for (var i = 0; i < tileItemsLen; i++) {
                        (function(i) {
                            tileImgs[i] = tileItems[i].getElementsByClassName('person-img')[0];
                        })(i);
                    }

                    var count = 0;

                    var leftImgArr = [' img/brand/brand_we_1_200x200.jpg', ' img/brand/brand_we_2_200x200.jpg', ' img/brand/brand_we_2_200x200.jpg'];
                    var centerImgArr = [' img/brand/brand_want_2_200x200.jpg', ' img/brand/brand_want_1_200x200.jpg', ' img/brand/brand_want_3_200x200.jpg'];
                    var rightImgArr = [' img/brand/brand_you_2_200x200.jpg', ' img/brand/brand_you_2_200x200.jpg', ' img/brand/brand_you_1_200x200.jpg'];

                    function autoAnim() {
                        if (count >= 3) {
                            count = 0;
                        }
                        tileImgs[0].src = leftImgArr[count];
                        tileImgs[1].src = centerImgArr[count];
                        tileImgs[2].src = rightImgArr[count];
                        count++;
                        wwuCount++;
                        if (wwuCount < Infinity) {
                            timer = setTimeout(autoAnim, 3000);
                        } else {
                            location.reload();
                        }
                    }

                    timer = setTimeout(autoAnim, 3000);
                })();
            }
            if (index === 3) {
                $('.card-list').html(` <div class="card card-em">
                    <img src="img/sc-data-128.png" class="card-img-top" alt="embedded" />
                    <section class="card-body">
                        <div class="card-title">嵌入式</div>
                        <div class="card-content">
                            C <br/> 智能硬件 <br/> 物联网
                        </div>
                        <a href="/direction/flush" class="btn btn-learn-more btn-sm">学习嵌入式</a>
                    </section>
                </div>
                <div class="card card-bc">
                    <img src="img/cdp-data-128.png" class="card-img-top" alt="embedded" />
                    <section class="card-body">
                        <div class="card-title">Web 后端</div>
                        <div class="card-content">
                            Java <br/> 云服务 <br/> 数据库
                        </div>
                        <a href="/direction/end" class="btn btn-learn-more btn-sm">学习 Web 后端</a>
                    </section>
                </div>
                <div class="card card-an">
                    <img src="img/android-128.png" class="card-img-top" alt="embedded" />
                    <section class="card-body">
                        <div class="card-title">Android</div>
                        <div class="card-content">
                            Java <br/> 移动终端 <br/> PWA
                        </div>
                        <a href="/direction/android" class="btn btn-learn-more btn-sm">学习 Android</a>
                    </section>
                </div>
                <div class="card card-fe">
                    <img src="img/code-fe-128.png" class="card-img-top" alt="embedded" />
                    <section class="card-body">
                        <div class="card-title">Web 前端</div>
                        <div class="card-content">
                            HTML、CSS、JavaScript、ES6 <br/> Vue.js、webpack <br/> Node.js、Express、MongoDB <br/>
                        </div>
                        <a href="/direction/fronted" class="btn btn-learn-more btn-sm">学习 Web 前端</a>
                    </section>
                </div>`).addClass('animated');
            }
            if (index === 4) {
                $('.members').html(`<div class="single-member effect-1">
                    <div class="member-image">
                        <img src="img/famous/famous-liguodong-200x200.jpg" alt="liguodong" />
                    </div>
                    <div class="member-info">
                        <h3>李国冬</h3>
                        <h5>翼灵创始人</h5>
                        <p>研究方向：无线传感器网络、大数据</p>
                        <p>2014年，参与 Google 大学生创新训练项目。</p>
                        <p>现工作于团博百众科技有限公司</p>
                        <div class="social-touch">
                            <a class="fb-touch" href="mailto:liguodongiot@foxmail.com">
                                <i class="fa fa-envelope"></i>
                            </a>
                            <a class="tweet-touch" href="404.html">
                                <i class="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="single-member effect-1">
                    <div class="member-image">
                        <img src="img/famous/famous-chengmiaohong-200x200.jpg" alt="chengmiaohong" />
                    </div>
                    <div class="member-info">
                        <h3>陈庙红</h3>
                        <h5>现工作于 - 大疆</h5>
                        <p>在校期间获得国家级奖项 4 项，省级奖项 3 项。</p>
                        <p>曾实习于世界 500 强爱立信（中国）</p>
                        <p>“ 爱交流，爱技术，爱旅游，爱生活，爱思考。”</p>
                        <div class="social-touch">
                            <a class="fb-touch" href="mailto:cmhiot@126.com">
                                <i class="fa fa-envelope"></i>
                            </a>
                            <a class="tweet-touch" href="404.html">
                                <i class="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="single-member effect-1">
                    <div class="member-image">
                        <img src="img/famous/famous-wuhaojie-200x200.jpg" alt="wuhaojie" />
                    </div>
                    <div class="member-info">
                        <h3>吴豪杰</h3>
                        <h5>现工作于 - 美团</h5>
                        <p>在校期间获得阿里巴巴、美团、百词斩等正式 offer。</p>
                        <p>“ 乐观、积极、勤学、思考是我的标签，不悔梦归处，只恨未尽心，更好的自己，我，在路上。”</p>
                        <div class="social-touch">
                            <a class="fb-touch" href="mailto:w19961009@126.com">
                                <i class="fa fa-envelope"></i>
                            </a>
                            <a class="tweet-touch" href="https://github.com/a-voyager">
                                <i class="fa fa-github"></i>
                            </a>
                            <a class="" href="http://wuhaojie.top/">
                                <i class="fa fa-globe"></i>
                            </a>
                        </div>
                    </div>
                </div>`).addClass('animated');
            }
            if (index === 5) {
                $('.yl-intro').html(`<p>我们是一支以嵌入式开发特色，以云端、手机端、PC 端协作开发的团队。<br/><span class="yl-translation">We are a team developing Embedded system specially, and collaborative with Cloud, Mobile and PC development.</span></p>
            <p>如果你有改变世界的想法，如果你有脚踏实地的耐力，<br/><span class="yl-translation">If you have the idea of changing the world, or have a down-to-earth endurance,</span>
            </p><p>那么，你正是我们在找的人！<br/><span class="yl-translation">we\'ll want you!</span></p>`).addClass('animated');
            }
            if (index === 6) {
                $('.yl-website').html(
                    `
                    <a href="/" class="yl-website-link text-center">
                        
                        <span class="website-info">翼灵官网</span>
                    </a>
                    <a href="/direction" class="yl-website-link text-center">
                        
                        <span class="website-info">培养方向</span>
                    </a>
                    <a href="/match" class="yl-website-link text-center">
                        
                        <span class="website-info">创意大赛</span>
                    </a>
                    <a href="/glory" class="yl-website-link text-center">
                        
                        <span class="website-info">开源空间</span>
                    </a>
                    <a href="/joinus" class="yl-website-link text-center">
                        
                        <span class="website-info">招新网站</span>
                    </a>
                    <a href="javascript:void(0);" target="_blank" class="yl-website-link text-center">
                        
                        <span class="website-info">考试系统</span>
                    </a>
                    <a href="/family" class="yl-website-link text-center">
                        
                        <span class="website-info">翼灵一家人</span>
                    </a>
                    `
                );
                (function() {
                    // 百度地图API功能
                    var map = new BMap.Map("allmap"); // 创建Map实例
                    var point = new BMap.Point(104.190368, 30.835399);
                    var marker = new BMap.Marker(point);
                    map.setMapStyle({
                        style: 'light',
                        styleJson: [{
                            "featureType": "building",
                            "elementType": "geometry.fill",
                            "stylers": {
                                "color": "#ccddffff",
                                "hue": "#a2c4c9"
                            }
                        }, {
                            "featureType": "background",
                            "elementType": "geometry.fill",
                            "stylers": {
                                "color": "#ccddffff"
                            }
                        }]
                    });
                    map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
                    //添加地图类型控件
                    map.addControl(new BMap.NavigationControl({
                        type: BMAP_NAVIGATION_CONTROL_SMALL
                    }));
                    map.addControl(new BMap.ScaleControl({
                        offset: new BMap.Size(100, 25)
                    }));
                    map.addControl(new BMap.OverviewMapControl());
                    map.addControl(new BMap.MapTypeControl({
                        mapTypes: [
                            BMAP_NORMAL_MAP,
                            BMAP_HYBRID_MAP
                        ]
                    }));
                    map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
                    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                    map.addOverlay(marker);
                    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                        '<img src="/img/yiling-building-72.png" alt="" style="float:right;zoom:1;overflow:hidden;width:72px;height:72px;margin-left:3px;"/>' +
                        '地址：成都市新都区新都大道8号<br/>电话：17721860879<br/>简介：翼灵物联工作室位于西南石油大学（成都校区）明理楼 C1011' +
                        '</div>';

                    //创建检索信息窗口对象
                    var searchInfoWindow = null;
                    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                        title: "翼灵物联工作室 104.190368E, 30.835399N", //标题
                        width: 290, //宽度
                        height: 105, //高度
                        panel: "panel", //检索结果面板
                        enableAutoPan: true, //自动平移
                        searchTypes: []
                    });
                    marker.enableDragging(); //marker可拖拽
                    marker.addEventListener("click", function(e) {
                        searchInfoWindow.open(marker);
                    });
                    searchInfoWindow.open(marker);
                    map.addOverlay(marker); //在地图中添加marker
                }());
            }
        },
        onLeave: function(index, nextIndex, direction) {
            if (index === 3 && direction === 'down') {
                $('.card-list').removeClass('zoomIn').addClass('zoomOut');
            }
            if (index === 4 && direction === 'up') {
                $('.card-list').addClass('zoomIn').removeClass('zoomOut');
            }
            if (index === 4 && direction === 'down') {
                $('.members').removeClass('zoomIn').addClass('zoomOut');
            }
            if (index === 5 && direction === 'up') {
                $('.members').addClass('zoomIn').removeClass('zoomOut');
            }
            if (index === 5 && direction === 'down') {
                $('.joinus-sec').removeClass('zoomIn').addClass('zoomOut');
            }
            if (index === 6 && direction === 'up') {
                $('.joinus-sec').addClass('zoomIn').removeClass('zoomOut');
            }
        },
        afterRender: function() {
            (function() {
                var navItem = document.getElementsByClassName('nav-item');
                var len = len = navItem.length;
                var line = [];
                for (var i = 0; i < len; i++) {
                    (function(i) {
                        line[i] = navItem[i].getElementsByClassName('line');
                    })(i);
                }
                for (var j = 0; j < len; j++) {
                    (function(j) {
                        EventUtil.addHandler(navItem[j], 'mouseover', function() {
                            if (!hasClass(this.getElementsByClassName('nav-link')[0], 'disabled')) {
                                line[j][0].style.backgroundColor = '#666';
                                line[j][1].style.backgroundColor = '#666';
                                move(line[j][0])
                                    .set('width', '91px')
                                    .end();
                                move(line[j][1])
                                    .set('width', '91px')
                                    .end();
                            }
                        });
                        EventUtil.addHandler(navItem[j], 'mouseout', function() {
                            line[j][0].style.backgroundColor = 'transparent';
                            line[j][1].style.backgroundColor = 'transparent';
                            move(line[j][0])
                                .set('width', '0px')
                                .end();
                            move(line[j][1])
                                .set('width', '0px')
                                .end();
                        });
                    }(j));
                }
            }());
        },
    });
    $.fn.fullpage.silentMoveTo('welcome', 1);


    $('.yl-time').text(new Date().getFullYear());

    $('.nav-item-js').click(function() {
        var $fa = $('.fa-for-js');
        if ($fa.hasClass('.fa-caret-right')) {
            $fa.removeClass('.fa-caret-right');
            $fa.addClass('fa-caret-down');
        } else {
            $.removeClass('fa-caret-down');
            $.addClass('fa-caret-right');
        }

    })


});

$(document).ready(function() {
    var storage = window.sessionStorage;
    var userObj = { username: null };

    if (parseInt(storage.getItem('loginState')) === 1) {
        $('#signInModal').modal('hide');
        $('.nav-item-js').css('display', 'block');
        $('.nav-item-logout').css('display', 'block');
        $('.sec-body-for-login').css('display', 'block');
        $('.nav-item-login').css('display', 'none');
        $('.login-btn').css('display', 'none');
        $('#user').text(storage.getItem('username'));
    } else {
        $('.nav-item-js').css('display', 'none');
        $('.nav-item-logout').css('display', 'none');
        $('.sec-body-for-login').css('display', 'none');
        $('.nav-item-login').css('display', 'display');
        $('.login-btn').css('display', 'display');
    }

    (function() {
        $('#inSubmitButton').click(function(event) {
            event.preventDefault();
            userObj.username = $('#username').val();
            storage.setItem('username', userObj.username);
            $.ajax({
                type: 'post',
                url: '/login',
                dataType: 'json',
                data: {
                    'username': $('#username').val(),
                    'password': $('#password').val()
                },
                success: function(data) {
                    console.log('login success');
                    storage.setItem('loginState', data.status);
                    if (parseInt(storage.getItem('loginState')) === 1) {
                        $('#signInModal').modal('hide');
                        $('.nav-item-js').css('display', 'block');
                        $('.nav-item-logout').css('display', 'block');
                        $('.sec-body-for-login').css('display', 'block');
                        $('.nav-item-login').css('display', 'none');
                        $('.login-btn').css('display', 'none');
                        $('#user').text(storage.getItem('username'));
                    }
                },
                error: function() {
                    console.log('login error');
                }
            });
        });
        $('.nav-item-logout').click(function() {
            storage.clear();
            $('.nav-item-js').css('display', 'none');
            $('.nav-item-logout').css('display', 'none');
            $('.sec-body-for-login').css('display', 'none');
            $('.nav-item-login').css('display', 'display');
            $('.login-btn').css('display', 'display');
        });
    })();

});