import './style.css'
import dinoUrl from './dino.png';
import donkeyUrl from './donkey.png';
import soccerUrl from './soccerball.png';

let dino = document.querySelector("#dino");
let donkey = document.querySelector("#donkey")

dino.style.backgroundImage = `url(${dinoUrl})`;
donkey.style.backgroundImage = `url(${donkeyUrl})`;


let game = document.querySelector("#game")

game.addEventListener("mousemove", function (event) {
  dino.style.left = `${event.offsetX}px`;
  donkey.style.right = `${event.offsetX}px`;
});

let ball = document.querySelector("#ball");
ball.style.backgroundImage = `url(${soccerUrl})`
let y =0;
let x = 0;
let vx = 2
function animateball() {
y += 1;
x += vx;
  ball.style.top = `${y}px`
  ball.style.left = `${x}px`
  requestAnimationFrame(animateball);
}

let button = document.querySelector('#reset');
button.addEventListener(
  'click',
  function () {
    x=0;
    y=0;
  }
)

animateball();
