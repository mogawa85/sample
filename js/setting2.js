$(document).ready(function () {
  $("#top-txt").lettering();

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
  $('#menu a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});