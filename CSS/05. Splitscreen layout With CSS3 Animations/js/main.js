$(document).ready(function () {
  $("#west .content").click(function () {
    $("#west-overlay").addClass("animated zoomIn open").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
      $(this).removeClass("animated zoomIn"); 
    });
  });
});