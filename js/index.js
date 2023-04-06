const gameBoard = document.getElementById("game-board");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const car = new Image();
car.src = "./images/car.png";

const road = new Image();
road.src = "./images/road.png";

let x = 100;
let y = 600;


//---Iteration 4 obstacles---///
class Obstacle {
  constructor() {
    this.x = Math.random() * 400;
    this.y = 0;
    this.w = Math.random() * 300;
    this.h = 20;
  }
}

let obstacleArr = [];

function addObstacle() {
  obstacleArr.push(new Obstacle());
}

function drawObstacles() {
  obstacleArr.forEach((obstacle) => {
    ctx.fillStyle = "red";
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
  });
}

function moveObstacles() {
  obstacleArr.forEach((obstacle) => {
    obstacle.y += 5;
  });
}

function checkCollision() {
  obstacleArr.forEach((obstacle) => {
    if (
      x < obstacle.x + obstacle.w &&
      x + 75 > obstacle.x &&
      y < obstacle.y + obstacle.h &&
      y + 100 > obstacle.y
    ) {
      console.log("collision");
    }
  });
}

//---Iteration 4 obstacles---///

function getKeyAndMove(e) {
  switch (e.key) {
    case "d":
      x += 15;
      break;
    case "a":
      x -= 15;
      break;
  }
}

function startGame() {
  setInterval(() => {
    addObstacle();
  }, 3000);

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  ctx.drawImage(road, 0, 0, 500, 700);

  ctx.drawImage(car, x, y, 75, 100);

  drawObstacles();
  moveObstacles();
  checkCollision();
}

window.onload = () => {
  document.addEventListener("keydown", (e) => {
    getKeyAndMove(e);
  });

  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};
