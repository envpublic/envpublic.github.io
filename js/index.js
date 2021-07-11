/**
 * Created by MacOS on 2016/10/18.
 */

var webSite = 'https://envpublic.github.io/';
var webTitle = '企业环保信息公示平台';
var phoneNum = '130-3299-0177';
var BS = [
    {
        bsId: 1, 
        show: true,
        showDeadline: '2021-07-30',
        bsName: '榆林双威环保建材有限公司',
        publicDate: '2021 年 05 月 22 日', 
        dropdownName: '榆林双威环保建材公司', 
        download: '榆林双威环保建材有限公司.zip' 
    },
    { 
        bsId: 2, 
        show: true,
        showDeadline: '2021-08-14',
        bsName: '延安恒利达洗选煤有限责任公司', 
        publicDate: '2021 年 06月 14 日', 
        dropdownName: '恒利达洗选煤有限责任公司', 
        download: '延安恒利达洗选煤有限责任公司.zip'
     }

]; 

/* 入口函数 */
(function () {
    setHeader();
    setFooter();
    getToday();

    setDropdownContent();
    dropdown();

    setBsContent();
    changeShanghu();
})();

function setHeader() {
  $("#site_title").empty();
  $("#site_title").html('<h1 class="h1Defined"><a href="'+ webSite +'" target="_parent">'+ webTitle +'<span>&nbsp;缔造健康的生活，维护和谐的自然环境</span></a></h1>');
}

/* 
 设置每个页面的底部内容
 */
function setFooter() {
    $('#templatemo_footer').empty()
    $('#templatemo_footer').html('<div class="section_w860"> Copyright © <span id="thisYear"></span> <a href="'+ webSite +'">'+ webTitle +'</a> | 平台公示请联系：<a>'+ phoneNum +'</a></div>')
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

function setDropdownContent () {
    $('#dropdownMenu').empty();
    var dropdownCon = '';
    for (var i = 0; i < BS.length; i++) {
        var item = BS[i];
        var itemLi = '<li id="dropDown'+ item.bsId +'"><a href="javascript:void(0)">'+ item.dropdownName +'</a></li>';
        dropdownCon += itemLi;
    }
    $('#dropdownMenu').html(dropdownCon)
}

function setBsContent () {
    $("#BS_List").empty();
    var BsCon = "";
    for (var i = 0; i < BS.length; i++) {
        var bsItem = BS[i];
        BsCon += '<div id="bsList'+ bsItem.bsId +'" class="shanghu"><p class="title"><span>企业名称：'+ bsItem.bsName +'</span> <span>公示日期：'+ bsItem.publicDate +'</span></p><p style="margin:10px 20px;font-size:14px;color:#555;line-height:28px;"><strong>'+ bsItem.bsName +'</strong> 目前正在进行项目环境检测报告验收，验收监测工作当地环保局承担。现进行项目验收监测报告信息公示。</p><p><a style="margin-right:10px;margin-left:400px;" href="../database/'+ bsItem.download +'" target="_blank">点击下载 <span>'+ bsItem.bsName +'</span> 公示文件</a></p></div>';
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
        $("#bsList1").show();
        $("#bsList1").siblings("div.shanghu").hide();
    });
   
    $("#dropDown2").on('click',function(){
        $("#bsList2").show();
        $("#bsList2").siblings("div.shanghu").hide();
    });
    
}