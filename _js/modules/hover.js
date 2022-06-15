
$(".card-info").each(
  function(index,element) {
    $(this).addClass('card-info-'+index);

    $(".card-info-"+index).hover(
      function() {
        $("#about").toggleClass('hover-'+index);
      }
    )
  }
);
