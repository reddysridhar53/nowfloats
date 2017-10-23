$(document).ready(function(){
    //handle on scroll of window
    $(window).scroll(function(){
        if( $("#imagesSec1").isInView()){
            showScrollMovement("imagesSec1",800)
        }
        if( $("#imagesSec2").isInView()){
            showScrollMovement("imagesSec2",2*800)
        }
        if( $("#imagesSec3").isInView()){
            showScrollMovement("imagesSec3",3*800)
        }
        if( $("#imagesSec4").isInView() ){
            showScrollMovement("imagesSec4",4*800)
        }
    })
    function showScrollMovement(div, height){
        var scrollTop = $(window).scrollTop() - height //subtracting the section height from scrolltop
        var scrollPos = (250 - scrollTop) //subtracting the position already set on each image
        console.log("scrollPos : ", scrollPos)
        if(scrollPos >= -300 && scrollPos <= 300){
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
