
var video = document.querySelector("#video"),
    button = document.querySelector("#button");

button.addEventListener("click", function () {
    video.play()
}, false);

var playButton = document.getElementsByClassName("video-play-btn")[0];
document.getElementsByClassName("video-play-btn")[0].addEventListener('click', function () {
    playButton.classList.add('video-play-btn--hide');
})