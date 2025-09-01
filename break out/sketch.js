// ball
let xPos, yPos;
let xDir, yDir;
let diam;
let speed;

// pad
let padWidth;

// brick
let bricks = [];
for (let i = 0; i < 10; i++) {
  bricks[i] = 1;
}

//game over
let gameOver = false;
let gameStart = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  initializeValues();
}

function draw() {
  background(220);
  if (!gameOver && gameStart) {
    ballDisplay();
    padDisplay();
    ballBouncing();
    brickDisplay();

  } else if (gameOver){
    gameOverDisplay();
  } else {
    gameStartDisplay();
  }
}

function initializeValues() {
  // ball
  speed = 4;
  xPos = width / 2;
  yPos = height / 2;
  diam = 30;
  xDir = yDir = speed;
  // pad
  padWidth = width/5;
}

function ballDisplay() {
  fill(255, 255, 0);
  stroke(0);
  ellipse(xPos, yPos, diam, diam);
  xPos += xDir;
  yPos += yDir;
}

function padDisplay() {
  push();
  rectMode(CENTER);
  stroke(0);
  fill(0, 0, 255);
  rect(mouseX, height-15, padWidth, 30);
  pop();
}

function ballBouncing() {
  //wall
  if (xPos - diam/2 < 0 || xPos + diam/2 > width) {
    xDir *= -1;
  }
  if (yPos - diam/2 < 0) {
    yDir *= -1;
  }

  // pad
  if ((xPos < mouseX + padWidth/2 && xPos > mouseX - padWidth/2) && yPos + diam/2 > height -30) {
    yDir *= -1;
  }

  //bricks
  for (let i = 0; i < 10; i++) {
    if (bricks[i] === 1) {
      if (yPos - diam/2 < height/10 && i*width/10 < xPos && xPos < (i+1)*width/10) {
        yDir *= -1;
        bricks[i] = 0;
      }
      if ((xPos + diam/2 > i*width/10 || xPos - diam/2 < (i+1)*width/10) && yPos < height/10) {
        xDir *= -1;
        bricks[i] = 0;
      }
    }
  }

  //gameOver
  if (yPos + diam/2 > height) {
    gameOver = true;
  }
}

function brickDisplay() {
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i] === 1){
      fill(0, 0, 255);
      stroke(0);
    } else {
      noFill();
      noStroke();
    }
    rect(i*width/10, 0, width/10, height/10);
  }
}

function gameOverDisplay() {
  fill(0);
  textAlign(CENTER, CENTER);
  textFont('Arial');
  textSize(width/10);
  text('GAME OVER', width/2, height/2);
}

function gameStartDisplay() {
  fill(0);
  textAlign(CENTER, CENTER);
  textFont('Arial');
  textSize(width/10);
  text('BREAK OUT', width/2, height/2);
  textSize(width/20);
  text('game start', width/2, height/2 + height/7);
}

// function gameStartJudge() {
  
// }