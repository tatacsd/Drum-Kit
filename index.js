for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", () => {
    let audio = new Audio("sounds/crash.mp3");
    audio.play();
  });
}
