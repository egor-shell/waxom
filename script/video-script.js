
var video = document.querySelector("#video"),
    button = document.querySelector("#button");

button.addEventListener("click", function () {
    video.play()
    video.setAttribute("controls", "controls");
}, false);

$(".video__play").click(function () {
    $(".video__play").addClass('video__play-none');
})