$(window).on("scroll", function(){
  var $scroll = $(window).scrollTop();
  if ($scroll >= 744) {
    $(".navbar-fixed-top").css("background-color", "#fff");
    $(".navbar-fixed-top .nav-link").css("color", "#000");
  } else {
    $(".navbar-fixed-top").css("background-color", "transparent");
    $(".navbar-fixed-top .nav-link").css("color", "#fff");
  }
});
