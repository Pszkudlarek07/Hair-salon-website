//PLAYS VIDEO IN LOW POWER MODE
$("body").on("click touchstart", function () {
  var videoElement = document.getElementsByClassName("inlinevideo");
  if (videoElement.playing) {
  } else {
    $(".inlinevideo").trigger("play");
  }
});
