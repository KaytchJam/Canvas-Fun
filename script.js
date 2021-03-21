
//Initializing Canvas & Other Document Variables
const canvas = document.getElementById("c-board");
const context = canvas.getContext("2d");

//Configuring Canvas
canvas.width = window.screen.width * .4;
canvas.height = 300;

centerX = canvas.width / 2;
centerY = canvas.height / 2;
//grid.width = window.screen.width * .4;
//grid.height = 300;

//Drawing & Manipulating Canvas ***

// Animation 2

const image = document.getElementById('source');

const player = {
  w: 50,
  h: 70,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0
};

function drawPlayer() {
  context.drawImage(image, player.x, player.y, player.w, player.h);
}

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function newPosition() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}

function detectWalls() {
  if(player.x < 0) {
    player.x = 0;
  } 

  if(player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }

  if(player.y < 0) {
    player.y = 0;
  }

  if(player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}

function update() {
  
  clear();
  drawPlayer();
  newPosition();

  requestAnimationFrame(update);
}

function moveUp() {
  player.dy = -player.speed;
}

function moveDown() {
  player.dy = player.speed;
}

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyDown(e) {
  if (e.key === 'ArrowRight' || e.key === "Right") {
    moveRight();
  } else if (e.key === 'ArrowLeft' || e.key === "Left") {
    moveLeft();
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    moveUp();
  } else if (e.key === "ArrowDown" || e.key === "Down") {
    moveDown();
  }
}

function keyUp(e) {
  if (
    e.key == "Right" || 
    e.key == "ArrowRight" || 
    e.key == "Left" || 
    e.key == "ArrowLeft" ||
    e.key == "Up" || 
    e.key == "ArrowUp" || 
    e.key == "Down" || 
    e.key == "ArrowDown"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

/*
context.fillStyle = "black";

context.fillRect(20, 20, 150, 100);
context.strokeRect(20, 140, 150, 100);

context.font = "30px Helvetica";
context.fillText("Hello world", 200, 40);*/

//Paths in Canvas ***
/*
context.beginPath();
context.moveTo(50, 50);
context.lineTo(150, 50);
context.lineTo(100, 200);
context.lineTo(50, 50);
context.fillStyle = "purple";
context.fill();
//context.closePath path goes back to beginning
//context.stroke();

context.beginPath();
context.moveTo(200, 50);
context.lineTo(150, 200);
context.lineTo(250, 200);
context.lineTo(200, 50);
context.stroke();

context.beginPath();
context.moveTo(350, 50);
context.lineTo(400, 200);
context.lineTo(450, 200);
context.lineTo(400, 50);
context.lineTo(350, 50);
context.fillStyle = "red";
context.fill();*/

// Circles Smiley Face
/*
context.beginPath();
context.arc(centerX, centerY, 100, 0, Math.PI * 2);
context.moveTo(centerX + 50, centerY);
context.arc(centerX, centerY, 50, 0, Math.PI, false);
context.moveTo(centerX-30, centerY-40);
context.arc(centerX-40, centerY-40, 10, 0, Math.PI * 2);
context.moveTo(centerX+50, centerY-40);
context.arc(centerX+40, centerY-40, 10, 0, Math.PI*2);
context.stroke();*/

/*
const circle = {
  x: 100,
  y: 100,
  size: 30,
  dx: 2.5,
  dy: 2
};

function drawCircle() {
  context.beginPath();
  context.arc(circle.x, circle.y, circle.size, 0, Math.PI *2);
  context.fillStyle = "gray";
  context.fill();
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();

  //change position
  circle.x += circle.dx;
  circle.y += circle.dy;

  // Detect Side Walls
  if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
    console.log("HIT");
    circle.dx *= -1;
  }

  // Detect Top & Bottom Walls
  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
    console.log("HIT");
    circle.dy *= -1;
  }

  requestAnimationFrame(update);
}

update();*/
