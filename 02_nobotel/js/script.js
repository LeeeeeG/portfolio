//web-top-country
const counBtn=$('.web-header-country ul');
const height1=$('.web-header-country');

counBtn.click(function(){
    let hei=$('.web-header-country').height();
    if(hei<40){
        height1.css('height','115px')
    }else{
        height1.css('height','35px')
    }
})

//web-header-bottom
let navButton=$('.web-header-nav>ul>li>a')
navButton.click(function(){
    navButton.siblings().toggleClass('on')
})


//web-main01-slide



//web-main01-contents
const hotelBtnWeb=$('.btn');
let hotelContHotelWeb=$('.web-main01-content-hotels');
let hotelContRestWeb=$('.web-main01-content-rest');

hotelBtnWeb.click(function(){
    hotelBtnWeb.toggleClass('onTabBtn');
    $('.web-main01-content>div').removeClass('onTabBtnCont');
    if($(this).index()===0){
        hotelContHotelWeb.addClass('onTabBtnCont');
    }else{
        hotelContRestWeb.addClass('onTabBtnCont');
    }
})

//web-main03-box
const web03BtnR=$('.web-main03-scroll-btns.right')
const web03BtnL=$('.web-main03-scroll-btns.left')
const web03Box=$('.web-main03-box')
const web03Btn=$('.web-main03-dots ul')
web03BtnR.click(function(){
    web03Box.children().first().animate({left:0},500)
    web03Box.children().last().animate({left:'100%'},500)
    web03Btn.children().first().addClass('main03On')
    web03Btn.children().last().removeClass('main03On')
})
web03BtnL.click(function(){
    web03Box.children().first().animate({left:'-100%'},500)
    web03Box.children().last().animate({left:0},500)
    web03Btn.children().first().removeClass('main03On')
    web03Btn.children().last().addClass('main03On')
})

//web-main04




//tab-header-bar
$('.tab-header-btn').click(function(){
    $('.tab-header-page').css('left','0');
})
$('.tab-header-exit').click(function(){
    $('.tab-header-page').css('left','-100%');
})

//tab-main01-slider




//tab-main01-contents
const hotelBtnTab=$('.btn');
let hotelContHotelTab=$('.tab-main01-content-hotels');
let hotelContRestTab=$('.tab-main01-content-rest');

hotelBtnTab.click(function(){
    hotelBtnTab.removeClass('onTabBtnT');
    $(this).addClass('onTabBtnT');
    $('.tab-main01-content>div').removeClass('onTabBtnContT');
    if($(this).index()===0){
        hotelContHotelTab.addClass('onTabBtnContT');
    }else{
        hotelContRestTab.addClass('onTabBtnContT');
    }
})

//tab-main03-box
const tab03BtnR=$('.tab-main03-scroll-btns.right')
const tab03BtnL=$('.tab-main03-scroll-btns.left')
const tab03Box=$('.tab-main03-box')
const tab03Btn=$('.tab-main03-dots ul')
tab03BtnR.click(function(){
    tab03Box.children().first().animate({left:0},500)
    tab03Box.children().last().animate({left:'100%'},500)
    tab03Btn.children().first().addClass('main03On')
    tab03Btn.children().last().removeClass('main03On')
})
tab03BtnL.click(function(){
    tab03Box.children().first().animate({left:'-100%'},500)
    tab03Box.children().last().animate({left:0},500)
    tab03Btn.children().first().removeClass('main03On')
    tab03Btn.children().last().addClass('main03On')
})




//mobile-header-bar
$('.mobile-header-btn').click(function(){
    $('.mobile-header-page').css('left','0');
})
$('.mobile-header-exit').click(function(){
    $('.mobile-header-page').css('left','-100%');
})

//mobile-main01-slider
/* let containerM=$('.mobile-main01-slide');
function switchImgM(){
    let imgs=containerM.find('a');
    let first=imgs.eq(0);
    let second=imgs.eq(1);
    containerM.append(first.fadeOut());
    second.fadeIn();
   }
setInterval(switchImgM, interval); */

//mobile-main01-content
const hotelBtnMob=$('.btn');
let hotelContHotelMob=$('.mobile-main01-content-hotels');
let hotelContRestMob=$('.mobile-main01-content-rest');

hotelBtnMob.click(function(){
    hotelBtnMob.removeClass('onTabBtnM');
    $(this).addClass('onTabBtnM');
    $('.mobile-main01-content>div').removeClass('onTabBtnContM');
    if($(this).index()===0){
        hotelContHotelMob.addClass('onTabBtnContM');
    }else{
        hotelContRestMob.addClass('onTabBtnContM');
    }
})

//mobile-main03-box
const mob03BtnR=$('.mobile-main03-scroll-btns.right')
const mob03BtnL=$('.mobile-main03-scroll-btns.left')
const mob03Box=$('.mobile-main03-box')
const mob03Btn=$('.mobile-main03-dots ul')
mob03BtnR.click(function(){
    mob03Box.children().first().animate({left:0},500)
    mob03Box.children().last().animate({left:'100%'},500)
    mob03Btn.children().first().addClass('main03On')
    mob03Btn.children().last().removeClass('main03On')
})
mob03BtnL.click(function(){
    mob03Box.children().first().animate({left:'-100%'},500)
    mob03Box.children().last().animate({left:0},500)
    mob03Btn.children().first().removeClass('main03On')
    mob03Btn.children().last().addClass('main03On')
})