/*
 *
 * ----------------------------------------------- */
$(".text-fluffy").text(function () {
  var str = $(this).text().trim();
  var html = "";

  for (var i = 0; i < str.length; i++) {
    html += "<span>" + str.charAt(i) + "</span>";
  }

  $(this).empty().html(html);
});

/*
 *
 * ----------------------------------------------- */
$(window).on("load", function () {
  setTimeout(function () {
    $(".title-animation-1").addClass("active wave");
  }, 500);

  setTimeout(function () {
    $(".title-animation-2").addClass("active wave");
  }, 2700);
});
