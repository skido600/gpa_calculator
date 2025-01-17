export function setupMenu() {
  const menu = document.querySelector(".menu");
  const board = document.getElementById("board");
  const close = document.querySelector(".close");

  board.classList.add("transition-transform", "duration-300", "transform");

  menu.addEventListener("click", () => {
    board.classList.add("active");
  });

  close.addEventListener("click", () => {
    board.classList.remove("active");
  });
}
