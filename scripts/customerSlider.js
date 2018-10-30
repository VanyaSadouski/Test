
    let slides = $(".slider-container").children(".customer-slider");
    let width = $(".slider-container").width();
    let i = slides.length;
    let offset = i * width;
    offset = 0;
    i = 0;

    function transformSize() {
        $(".customer-slider").css("transform","translate3d(-"+offset+"px, 0px, 0px)");
    }
    window.addEventListener('resize', transformSize);
    $('.customer_dot').click(function(){
        $(".customer_dot").removeClass("active");
        $(this).addClass("active");
        i = $(this).index();
        console.log(i);
        offset = i * width;
        $(".customer-slider").css("transform","translate3d(-"+offset+"px, 0px, 0px)");

    });


