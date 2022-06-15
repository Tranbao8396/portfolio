$(".nav-link").each(function() {
  $(this).on("click", function(){
    $(this).addClass("active");
    $(this).hasClass("active").removeClass("active");
  });
});
