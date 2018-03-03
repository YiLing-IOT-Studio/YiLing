$.ajax({
    type:'GET',
    url:'http://118.89.36.125:80/back',
    dataType:'json',
    data: {
    },
    success: function (data) {
        var arr1 = [];
        var arr2 = [];
        for(var i in data)
        {
            if(data[i].type == 1)
            {
                arr1.push(data[i]);
            }
            else {
                arr2.push(data[i]);
            }
        }
        if(arr1.length != 0){
            for(var key in arr1)
            {
                var itemDisplay = $('<div class="col-12 item-display">' +
                    '<img class="col-12 newAddImg" src="img/dis.png" alt="background">' +
                    '<img class="addImg item-imgs-odd newDisplayImg col-6" src="http://p0f7xvqqj.bkt.clouddn.com/' + arr1[key].url +
                    '" alt="item">' + '<div class="item-introduce newDisplayIntro item-introduce-odd col-6">' +
                    '<h3>'+ arr1[key].itemName +'</h3>' +
                    '<span>'+ arr1[key].leader +'</span>' +
                    '<p>' + arr1[key].introduce +'</p>' +
                    '</div>' +
                    '<button class="btn delete"></button>'+
                    '</div>');
                $('.item-display:last').after(itemDisplay);
                if(key%2 === 1){
                    $('.newAddImg').eq(key).addClass('rotate');
                    $('.newDisplayImg').eq(key).removeClass('item-imgs-odd').addClass('item-imgs-even');
                    $('.newDisplayIntro').eq(key).removeClass('item-introduce-odd').addClass('item-introduce-even');
                }
            }
        }
        if(arr2.length != 0){
            for(var j = 0;j < arr2.length;j++)
            {
                alert(j);
                if(j%2 === 0)
                {
                    var gloryWall = $('<div class="col-12 glory-wall newGloryWall clearfix"></div>');
                    $('.glory-wall:last').after(gloryWall);
                }
                var left = $('<div class="col-6 pull-left glory-left newGlory">' +
                    '<div><img class="addImg col-8 pull-left" alt="" src="http://p0f7xvqqj.bkt.clouddn.com/'+ arr2[j].url + '"/><div>' +
                    '<h3>'+ arr2[j].gloryName + '<br>'+ arr2[j].ranking +'</h3>' +
                    '<span>'+ arr2[j].gLeader +'</span>' +
                    '<p>' + arr2[j].contestIntro+ '</p>' +
                    '<p>' + arr2[j].result + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<button class="btn delete"></button>'+
                    '</div>');
                $('.newGloryWall').eq(parseInt(j/2)).append(left);
                if(j%2 === 1){
                    $('.newGlory:eq(j)').removeClass('pull-left glory-left').addClass('pull-right glory-right');
                    $('.newGlory:eq(j) .col-8').removeClass('pull-left').addClass('pull-right');
                }
            }
        }
        $('.delete').on('click',function () {
            var imgUrl = $(this).parent().find('.addImg').attr('src').substring(33);
            console.log(imgUrl);
            $.ajax({
                type: 'POST',
                url: 'http://118.89.36.125:80/image?type=3',
                dataType: 'json',
                data: {

                },
                success: function () {
                    alert('删除成功！');
                }
            })
            $.post('http://118.89.36.125:80/image?type=3&&url='+imgUrl,{
                url: imgUrl
            })
            alert('删除成功！');
            window.location.reload();
        })
    },
    error: function (jqXHR, textStatus) {
        console.log(textStatus);
    }
});

$('#submit').on('click',function () {
    var textarea = $('#myModal textarea');
    var file = $('#myModal1 input[type = file]');
    var flag = true;
    for(var i = 0;i < textarea.length; i ++)
    {
        if(textarea[i].value === '')
        {
            flag = false;
        }
    }
    for(var j = 0;j < file.length;j ++)
    {
        if(file[j].value === '')
        {
            flag = false;
        }
    }
    if(flag === false)
    {
        alert('请将信息填写完整！')
        return false;
    }
    else {
        alert('提交成功！');
    }
})
$('#submit1').on('click',function () {
    var textarea = $('#myModal2 textarea');
    var file = $('#myModal2 input[type = file]');
    var flag = true;
    for(var i = 0;i < textarea.length; i ++)
    {
        if(textarea[i].value == '')
        {
            flag = false;
        }
    }
    for(var j = 0;j < file.length;j ++)
    {
        if(file[j].value == '')
        {
            flag = false;
        }
    }
    if(flag == false)
    {
        alert('请将信息填写完整！')
        return false;
    }
    else {
        alert('提交成功！');
    }
})