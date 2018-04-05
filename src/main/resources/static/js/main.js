$(document).ready(function() {
    $('#fullpage').fullpage({

        //Navigation
        lockAnchors: false,
        anchors: ['loginPage', 'welcomePage', 'studyPage', 'infoPage', 'joinPage', 'morePage'],
        navigation: true,
        navigationPosition: 'right',
        //navigationTooltips: ['loginPage', 'welcomePage', 'studyPage', 'infoPage', 'joinPage', 'morePage'],
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
            if (index === 1) {}
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
                        ['http://p22svme3d.bkt.clouddn.com/group/frontend/fe_liyoubo_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/group/frontend/fe_liwenfei_200x200.jpg'],
                        ['http://p22svme3d.bkt.clouddn.com/group/frontend/fe_zhoudeng.jpg', 'http://p22svme3d.bkt.clouddn.com/group/frontend/fe_caoxuemei_200x200.jpg']
                    ];
                    tileItems[1].imgs = [
                        ['http://p22svme3d.bkt.clouddn.com/group/backend/be_xiongxiaoyu_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/group/backend/be_jinglili_200x200.jpg'],
                        ['http://p22svme3d.bkt.clouddn.com/group/backend/be_wangping_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/group/backend/be_zhanghaiyang_200x200.jpg']
                    ];
                    tileItems[2].imgs = [
                        [' img/glory/ji-suan-ji-she-ji-da-sai-yi-deng-jiang-200x200.jpg', ' img/glory/wu-lian-wang-she-ji-jing-sai-200x200.jpg'],
                        [' img/glory/wu-lian-wang-she-ji-jing-sai-2-200x200.jpg', ' img/glory/wu-lian-wang-she-ji-jing-sai-3-200x200.jpg']
                    ];
                    tileItems[3].imgs = [
                        ['http://p22svme3d.bkt.clouddn.com/group/embedded/em_yigangxi_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/group/embedded/em-chengmiaohong-200x200.jpg'],
                        ['http://p22svme3d.bkt.clouddn.com/group/embedded/em_jifengtao_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/group/embedded/em_jifengtao_200x200.jpg']
                    ];
                    tileItems[5].imgs = [
                        ['http://p22svme3d.bkt.clouddn.com/group/andriod/an_tangguangsheng_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/group/andriod/an_zengxinrui_200x200.jpg'],
                        ['http://p22svme3d.bkt.clouddn.com/group/andriod/an_songqifei_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/group/andriod/an_duzeming_200x200.jpg']
                    ];
                    tileItems[6].imgs = [
                        ['http://p22svme3d.bkt.clouddn.com/group/newMembers/new_fenglei_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/group/newMembers/new_xiaoyaqiong_200x200.jpg'],
                        ['http://p22svme3d.bkt.clouddn.com/group/newMembers/new_xiongcheng_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/group/newMembers/new_pengzhen_200x200.jpg']
                    ];
                    tileItems[7].imgs = [
                        ['http://p22svme3d.bkt.clouddn.com/project/xun-che-xi-tong-200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/project/zhi-neng-an-quan-xie-200x200.jpg'],
                        ['http://p22svme3d.bkt.clouddn.com/project/wei-xin-xiao-cheng-xu-200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/project/zhi-neng-xiao-che-200x200.jpg']
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

                    var leftImgArr = ['http://p22svme3d.bkt.clouddn.com/brand/brand_we_1_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/brand/brand_we_2_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/brand/brand_we_2_200x200.jpg'];
                    var centerImgArr = ['http://p22svme3d.bkt.clouddn.com/brand/brand_want_2_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/brand/brand_want_1_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/brand/brand_want_3_200x200.jpg'];
                    var rightImgArr = ['http://p22svme3d.bkt.clouddn.com/brand/brand_you_2_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/brand/brand_you_2_200x200.jpg', 'http://p22svme3d.bkt.clouddn.com/brand/brand_you_1_200x200.jpg'];

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
            if (index === 3) {}
            if (index === 4) {}
            if (index === 5) {}
            if (index === 6) {
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

    $.fn.fullpage.silentMoveTo('welcomePage', 0);

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

    });

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

    document.body.style.visibility = 'visible'
});