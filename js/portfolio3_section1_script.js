$(function () {
  $("#maintext > p, #maintext_by").addClass("on");
});

$("#bottomarrow").on("click", function () {
  windowtop = $(window).scrollTop();
  $("body,html").animate({ scrollTop: $("#section2").offset().top }, 1000);
});
