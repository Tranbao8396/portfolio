$(window).on("scroll", function(){
  var $scroll = $(window).scrollTop();
  if ($scroll >= 800) {
    $(".navbar-fixed-top").css("top", "-100px");
  } else {
    $(".navbar-fixed-top").css("top", "0");
  }
});
