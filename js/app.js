$(document).ready(function(){
    //handle on scroll of window
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
        var scrollTop = $(window).scrollTop() - height //subtracting the section height from scrolltop
        var scrollPos = (250 - scrollTop) //subtracting the position already set on each image
        console.log("scrollPos : ", scrollPos)
        if(scrollPos >= -300 && scrollPos <= 250){
            var transform = "translate3d(0px," + scrollPos + "px, 0px)"; //setting the transform on each image.
            $("#"+div+" img").css({"-webkit-transform" : transform });
        }
    }
    $.fn.isInView = function() {
        //finding if the sectiong that has been scrolled is in the window or not.
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        //if the section is in window view
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
})
