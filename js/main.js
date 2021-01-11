$(window).on("load", function(){
    $(".preloader").fadeOut("slow");
});
$(document).ready(function(){
    //Navbar Shrink
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    // video popup
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")==''){
                $("#player-1").attr("src",videoSrc);
            }
        }
    });
    // features casourel
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        }
    });
    // screenshot casourel
    $('.screenshots-casousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
                
            },
            1000:{
                items:4,
                
            }
        }
    });
    // testimonials casourel
    $('.testimonials-casousel').owlCarousel({
        loop:true,
        margin:0,
        // autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        }
    });
    // team casourel
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        }
    });
    // scroll smooth
    $.scrollIt({
        topOffset: -50
    });

    //auto collapse
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    })

    function toggleTheme(){
        if(localStorage.getItem("my-theme") !== null){
            if(localStorage.getItem("my-theme") === "dark"){
                $("body").addClass("dark");
            }
            else{$("body").removeClass("dark")}
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("my-theme","dark");
        }
        else{
            localStorage.setItem("my-theme","light");
        }
        updateIcon();
    })
    function updateIcon(){
        
        if($("body").hasClass("dark")){
            
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else{
            
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
})