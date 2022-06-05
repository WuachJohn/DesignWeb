$(document).ready(function(){
    var stt = 0;
    starImg = $("img.slide:first").attr("stt");
    endImg = $("img.slide:last").attr("stt");
    $("img.slide").each(function(){
       if($(this).is(':visible'))
       stt = $(this).attr("stt");
    });
    $("#next").click(function(){
        if(stt == endImg){
            stt = -1;
        }
        next = ++stt;
        $("img.slide").hide();
        $("img.slide").eq(next).show();
    });
    $("#prev").click(function(){
        if(stt == 0){
            stt == endImg;
            prev = stt++;
        }
        prev = --stt;
        $("img.slide").hide();
        $("img.slide").eq(prev).show();
    });
    setInterval(function(){
        $("#next").click();
    },2000);
});

const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click", function(x){
    if(x.target.classList.contains("menu-button")){
        const Target = x.target.getAttribute("data-title");
        menuTitle.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");

        const menuItem = document.querySelector(".menu");
        menuItem.querySelector(".menu-item-content.active").classList.remove("active");
        menuItem.querySelector(Target).classList.add("active");
    }
});

const Top = document.querySelector(".top")
window.addEventListener("scroll", function(){
    const x = this.pageYOffset;
    if(x > 80){
        Top.classList.add("active");
    }else{
        Top.classList.remove("active");
    }
})
