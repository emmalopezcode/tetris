let startGameBtn = document.querySelector(".start-game");
let popup = document.querySelector(".popup-container");
let scoreDOM = document.querySelector(".score");
let intro = document.querySelector(".intro");

startGameBtn.addEventListener("click", () => {
  popup.style.display = "none";
  board.isGameOver = false;
  playing = true;
  score = 0;
});
