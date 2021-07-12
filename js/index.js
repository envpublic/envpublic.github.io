/**
 * Created by MacOS on 2016/10/18.
 */

var webSite = 'https://envpublic.github.io/';
var webTitle = '企业环保信息公示平台';
var phoneNum = '13032990177（微信同号）';

/* 入口函数 */
(function () {
    setHeader();
    setFooter();
    getToday();
    specialBsShow();  //index show

    setDropdownContent();
    dropdown();

    setBsContent();
    changeShanghu();
})();

function setHeader() {
  $("#site_title").empty();
  $("#site_title").html('<h1 class="h1Defined"><a href="'+ webSite +'" target="_parent">'+ webTitle +'<span>遵守国家环保要求，依法公开环境防治信息，主动接受社会监督</span></a></h1>');
}

/* 
 设置每个页面的底部内容
 */
function setFooter() {
    $('#templatemo_footer').empty()
    $('#templatemo_footer').html('<div class="section_w860"> Copyright © <span id="thisYear"></span> <a href="'+ webSite +'">'+ webTitle +'</a> | 公示请联系：<a>'+ phoneNum +'</a></div>')
}

/*获取并显示今日时间*/
function getToday() {
    var today = new Date();
    var day; 
    var dateToday;
    if(today.getDay()==0) day = " 星期日";
    if(today.getDay()==1) day = " 星期一";
    if(today.getDay()==2) day = " 星期二";
    if(today.getDay()==3) day = " 星期三";
    if(today.getDay()==4) day = " 星期四";
    if(today.getDay()==5) day = " 星期五";
    if(today.getDay()==6) day = " 星期六";
    dateToday = (today.getFullYear()) + "年" + (today.getMonth() + 1 ) + "月" + today.getDate() + "日" + day +"";
    $("#dateToday").html(dateToday);
    $("#thisYear").html(today.getFullYear());
}

// Set Special Business at index
function specialBsShow () {
    $('#specialBsShow').empty();
    var specialBsCon = '';
    for (var i = 0; i < BS.length; i++) {
        var item = BS[i];
        // isSpecialShow
        if (item.isBsShow && item.isSpecialShow) {
            var itemLi = '<div class="recent_post"><h4><a href="html/tab4.html">'+ item.bsName +'</a></h4>发布日期：'+ item.publicDate +'</div>';
            specialBsCon += itemLi;
        }
    }
    $('#specialBsShow').html(specialBsCon);
}

// Set Dropdown List
function setDropdownContent () {
    $('#dropdownMenu').empty();
    var dropdownCon = '';
    for (var i = 0; i < BS.length; i++) {
        var item = BS[i];
        if (item.isBsShow) {
            var itemLi = '<li id="dropDown'+ item.bsId +'"><a href="javascript:void(0)">'+ item.dropdownName +'</a></li>';
            dropdownCon += itemLi;
        }
    }
    $('#dropdownMenu').html(dropdownCon)
}

// Set Business Content in tab4
function setBsContent () {
    $("#BS_List").empty();
    var BsCon = "";
    for (var i = 0; i < BS.length; i++) {
        var bsItem = BS[i];
        if (bsItem.isBsShow) {
            BsCon += '<div id="bsList'+ bsItem.bsId +'" class="shanghu"><p class="title"><span>企业名称：'+ bsItem.bsName +'</span> <span>发布日期：'+ bsItem.publicDate +'</span></p><p style="margin:10px 20px;font-size:14px;color:#555;line-height:28px;"><strong>'+ bsItem.bsName +'</strong> 正在进行固体废物污染环境防治信息公示。公示详细信息见附件，我公司承诺公示信息真实有效，并承担相关法律责任。</p><p><a style="margin-right:10px;margin-left:400px;" href="../bsData/'+ bsItem.download +'" target="_blank">点击下载 <span>'+ bsItem.bsName +'</span> 公示文件</a></p></div>';
        }
    }
    $("#BS_List").html(BsCon);
}


// 添加商户在下来菜单
function dropdown() {
$('#nav_menu>ul>li').hover(
    function() {
      /*  if($('#dropdownMenu').css('display')=="none"){
           $('#dropdownMenu').show();
           }
        */
        $('ul', this).stop().slideDown(200);
    },
    function() {
        $('ul', this).stop().slideUp(300);
    }
);

//点击标题让下拉菜单缩回   
$("#clickHideMenu").off('click');    
$("#clickHideMenu").on('click',function(){
	if($('#dropdownMenu').css('display')==""){
           $('#dropdownMenu').hide();
        }
	});
}

//点击不同商户，切换相应的内容
function changeShanghu(){
    $("#dropDown1").on('click',function(){
        $("#bsList1").show().siblings("div.shanghu").hide();
    });

    $("#dropDown2").on('click',function(){
        $("#bsList2").show().siblings("div.shanghu").hide();
    });

    $("#dropDown3").on('click',function(){
        $("#bsList3").show().siblings("div.shanghu").hide();
    });

    $("#dropDown4").on('click',function(){
        $("#bsList4").show().siblings("div.shanghu").hide();
    });
    
    $("#dropDown5").on('click',function(){
        $("#bsList5").show().siblings("div.shanghu").hide();
    });

    $("#dropDown6").on('click',function(){
        $("#bsList6").show().siblings("div.shanghu").hide();
    });

    $("#dropDown7").on('click',function(){
        $("#bsList7").show().siblings("div.shanghu").hide();
    });

    $("#dropDown8").on('click',function(){
        $("#bsList8").show().siblings("div.shanghu").hide();
    });

    $("#dropDown9").on('click',function(){
        $("#bsList9").show().siblings("div.shanghu").hide();
    });

    $("#dropDown10").on('click',function(){
        $("#bsList10").show().siblings("div.shanghu").hide();
    });
}