/// <reference path="../typings/globals/jquery/index.d.ts" />
let toggleCheck = "open"


// ----------------------- Start toggle menu -----------------------------
$(".navbar-toggler").click(() => {

    if (toggleCheck == "open") {
        $(".navbar-toggler-icon").css('display', "none")
        $(".fa-xmark").css('display', "block")

        toggleCheck = "close"

    }
    else {
        $(".navbar-toggler-icon").css('display', "block")
        $(".fa-xmark").css('display', "none")
        toggleCheck = "open"

    }

})
// ----------------------- End toggle menu -----------------------------

// ----------------------- Start navbar Scroll -----------------------------
$(window).scroll(() => {
    if ($(window).scrollTop() > $(".about").offset().top-100) 
    {
        $(".navbar").css("background-color", "var(--MainColor)")
        $(".navbar").css("transition", "all 1s")

    }
    else
    {
        $(".navbar").css("background-color", "rgba(255, 255, 255, 0.233)")
        $(".navbar").css("transition", "all 1s")

    }

})


// ----------------------- End navbar Scroll -----------------------------
