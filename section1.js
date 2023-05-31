$(document).ready(function(){
    
    $(".section1 .item_list")
        .on("init", function (event, slick) {
            $(this)
                .next(".slick-controls")
                .append(
                    '<div class="slick-progress"><div class="progress"></div></div><div class="slick-counter"><span class="current">1</span> <i></i> <span class="total">' +
                        slick.slideCount +
                        '</span></div><div class="control"> <button class="control_pause active"><i class="ri-pause-line"></i><span class="sr-only">�뺤�</span></button><button class="control_play"><i class="ri-play-line"></i><span class="sr-only">�쒖옉</span></button></div>'
                );
        })
        .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            $(this)
                .next(".slick-controls")
                .find(".current")
                .text(nextSlide + 1);
        });
    
        
        $slider = $('.section1, .section3');
        $sliderList = $slider.find('.item_list');	
        $sliderList.slick({
            fade: false,
            autoplay: true,  
            arrows: true,
            focusOnSelect: true,
            slidesToShow: 4, 
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                    slidesToShow: 2
                    }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
                }
            ]		
        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {	
            setTimeout( function() {
                $(this).find(".slick-slide").each(function(){ 
                    if( $(this).hasClass('slick-active') ){
                        $(this).removeAttr("aria-hidden tabindex");
                    }
                });	
            },200);
        })
    
        
        $slider.on("click", ".control_pause", function () {
            $(this).removeClass(AC).siblings("button").addClass(AC).parents(".container").find(".item_list").slick("slickPause")
            if($(this).parents("section").hasClass("section1")) isPause = true; 
        
        $slider.on("click", ".control_play", function () {
            $(this).removeClass(AC).siblings("button").addClass(AC).parents(".container").find(".item_list").slick("slickPlay")
            if($(this).parents("section").hasClass("section1")) { 
                isPause = false;
                startProgressbar();
            }
        })
    
        
        $slider.on("click", ".slick-prev, .slick-next", function () {
            $(this).parents("section").find(".control_pause").trigger("click");		
        })

})