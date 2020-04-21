$("ul").on("click", "li", function () {
  $(this).toggleClass("done");
});

$("ul").on("click", "span", function (event) {
  event.stopPropagation();
  $(this)
    .parent()
    .fadeOut(function () {
      $(this).remove();
    });
});

$("input").keypress(function (event) {
  if (event.which === 13) {
    let text = $(this).val();
    $(this).val("");
    console.log(text);

    $("ul").append("<li>" + text + " <span><i class="fas fa-check-square"></i></span> </li>");
  }


  
});


