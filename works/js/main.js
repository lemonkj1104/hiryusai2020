


function scrollTop(num) {
    console.log($(num).offset().top);
    $("html,body").animate({
        scrollTop:$(num).offset().top
    });
}