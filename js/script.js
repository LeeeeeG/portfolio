let wheelDelta=0; 
let browser=0; 


$('.section').each(function(index){
	$(this).on('mousewheel DOMMouseScroll', function(e){
		e.preventDefault();
		browser=window.navigator.userAgent.toLowerCase().indexOf('firefox'); 
		if(browser>=0){
			wheelDelta=-e.detail*40
		}else{
			wheelDelta=e.originalEvent.wheelDelta
		}
		
		if(wheelDelta<0){
			if(index<$('.section').length-1){
				$('html, body').stop().animate({scrollTop:$(this).next().offset().top},500);
			}
		}else{
			if(index>0){
				$('html, body').stop().animate({scrollTop:$(this).prev().offset().top},500);
			}
		}
	})
})


//01
setInterval(function(){
    $('.top-line').css('left','-100%').animate({left:0},500);
    $('.name-line').css('top','100%').animate({top:0},500);
},2000)


//nav


//02
$('.progress-bar').each(function(){
    let progressWrap=$(this),
    progressBar=progressWrap.find('.bar'),
    progressText=progressWrap.find('.num'),
    progressNum=progressText.attr('data-num');


    progressBar.animate({width:progressNum+"%"},2000);

    setInterval(textAni,1000/10)
    function textAni(){
        let currentWidth=progressBar.width()/progressWrap.width()*100;
        progressText.text(Math.ceil(currentWidth)+"%")
    }

});