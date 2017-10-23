$(document).ready(function(){
    //handle on scroll of window
    $(window).scroll(function(){
        if( $("#mainContent .sub-txt").isInView() ){
            //added fadeinup effect for the content
            if( !$("#mainContent .sub-txt").hasClass("fadeInUp") ) $(".sub-txt").addClass("animated fadeInUp")
        }
        if( $("#imagesSec1").isInView()){
            showScrollMovement("imagesSec1",700)
        }
        if( $("#imagesSec2").isInView()){
            showScrollMovement("imagesSec2",2*700)
        }
        if( $("#imagesSec3").isInView()){
            showScrollMovement("imagesSec3",3*700)
        }
        if( $("#imagesSec4").isInView() ){
            showScrollMovement("imagesSec4",4*700)
        }
    })
    function showScrollMovement(div, height){
        var scrollTop = $(window).scrollTop() //Get the actual scrollTop;
        var scrollSection = scrollTop - height //subtracting the section height from scrolltop
        var scrollPos = 300 - scrollSection //subtracting the position already set on each image
        if(scrollPos >= -300 && scrollPos <= 300){
            var transform = "translate3d(0px," + scrollPos + "px, 0px)"; //setting the transform on each image.
            $("#"+div+" img").css({"-webkit-transform" : transform}).addClass("animated")
        }
        //added fadeinup effect for the content inside the box
        if( !$("#"+div+" .sub-content").hasClass("fadeInUp") ) $("#"+div+" .sub-content").addClass("animated fadeInUp")
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
