$(document).ready(function(){

    $(window).scroll(function(){
        if( $("#images-sec1").isInView()){
            showScrollMovement("images-sec1",800)
        } else if( $("#images-sec2").isInView()){
            showScrollMovement("images-sec2",2*800)
        }else if( $("#images-sec3").isInView()){
            showScrollMovement("images-sec3",3*800)
        }else if( $("#images-sec4").isInView() ){
            showScrollMovement("images-sec4",4*800)
        }else{

        }
    })
    function showScrollMovement(div, height){
        var scrollTop = $(window).scrollTop() - height
        var scrollPos = (250 - scrollTop)
        console.log("scrollPos : ", scrollPos)
        if(scrollPos >= -300 && scrollPos <= 250){
            var transform = "translate3d(0px," + scrollPos + "px, 0px)";
            $("#"+div+" img").css({"-webkit-transform" : transform });
        }
    }
    $.fn.isInView = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
})
