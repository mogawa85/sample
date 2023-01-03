$(document).ready(function () {
    $("#menu-bt").on("click", function () {
        $("#menu").toggleClass("open");
        $("#menu-bt .header__block").toggleClass("cross");
    })
    $("#menu").on("click", function () {
        $("#menu").toggleClass("open");
        $("#menu-bt .header__block").toggleClass("cross");
    })
    $("#faq dt").on("click", function () {
        $(this).next("dd").slideToggle();
        $(this).toggleClass("cross");
    })
    $("#top-txt").lettering();
});

bubbly({
    shadowColor: "#fff",
    colorStart: "#fff",
    colorStop: "#3dd2fc",
    bubbles: 10,
    velocityFunc: () => .5 + Math.random() * 0.5,
});