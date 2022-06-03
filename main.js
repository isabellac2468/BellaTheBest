import './style.css'


let dino = document.querySelector("#dino");
let donkey = document.querySelector("#donkey")

let game = document.querySelector("#game")

game.addEventListener("mousemove", function (event) {
  dino.style.left = `${event.offsetX}px`;
  donkey.style.right = `${event.offsetX}px`;
});

let ball = document.querySelector("#ball")
let y =0;
let x = 0;
function animateball() {
y += 1;
x += 1;
  ball.style.top = `${y}px`
  ball.style.left = `${x}px`
  requestAnimationFrame(animateball);
}

animateball();
