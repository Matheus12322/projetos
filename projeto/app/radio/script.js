document.addEventListener("DOMContentLoaded", function () {
  let player = document.getElementById("radioPlayer");
  let playButton = document.getElementById("playButton");
  let pauseButton = document.getElementById("pauseButton");
  playButton.addEventListener("click", () => {
    player.play();
    pauseButton.style = "display : inline";
    playButton.style = "display : none";
  });

  pauseButton.addEventListener("click", () => {
    player.pause();
    playButton.style = "display : inline";
    pauseButton.style = "display : none";
  });
});
