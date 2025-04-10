let starWidth = 0.5;
let starHeight = 1.5;
let Xpos = 200, Ybody = 530; // 캐릭터 전체 이동 변수
let pupilX, pupilY;
let speed = 3; // 이동 속도
let glassesOn = true;
let glassColor = 255;
let timer = 0;


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(40, 40, 60);
  
  //배경
  stroke(255);
  strokeWeight(10);
  //별
  point(20, 30);
  point(30, 150);
  point(50, 250);
  point(80, 120);
  point(90, 40);
  point(190, 15);
  point(230, 30);
  point(290, 70);
  point(390, 330);
  point(380, 150);
  point(360, 40);
  //아래 별똥별
  point(115, 75); //별똥별 기준
  triangle(115-starWidth, 75, 115+starWidth, 75, 115, 75+starHeight);
  triangle(115-starWidth, 75, 115+starWidth, 75, 115, 75-starHeight);
  triangle(115-starHeight, 75, 115, 75+starWidth, 115, 75-starWidth);
  triangle(115+starHeight, 75, 115, 75+starWidth, 115, 75-starWidth);
  noFill();
  strokeWeight(3);
  arc(200, 100, 200, 100, radians(200), radians(320)); //별똥별 선
  //위의 별똥별
  strokeWeight(10);
  point(60, 35); //별똥별 기준
  triangle(60-starWidth, 35, 60+starWidth, 35, 60, 35+starHeight);
  triangle(60-starWidth, 35, 60+starWidth, 35, 60, 35-starHeight);
  triangle(60-starHeight, 35, 60, 35+starWidth, 60, 35-starWidth);
  triangle(60+starHeight, 35, 60, 35+starWidth, 60, 35-starWidth);
  noFill();
  strokeWeight(3);
  arc(180, 80, 300, 150, radians(200), radians(320)); //별똥별 선
  noStroke();
  //산
  fill("#3AA83F");
  triangle(0, 400, 300, 400, 150, 20);
  fill("#74DA79");
  triangle(200, 400, 400, 400, 300, 80);

  // 키 입력 상태에 따라 캐릭터 이동
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW || key === 'a' || key ==='A') {
      Xpos = constrain(Xpos - speed, 75, 325);
    }
    if (keyCode === RIGHT_ARROW || key === 'd' || key ==='D') {
      Xpos = constrain(Xpos + speed, 75, 325);
    }
  }

  face();
}

function face() {
  // 혀 내밀기 (눈동자 움직임)
  pupilX = constrain(Xpos + (mouseX - Xpos) / 20, Xpos - 7, Xpos + 7);
  pupilY = constrain(180 + (mouseY - 220) / 44, 177, 183);

  // 몸통
  noStroke();
  fill(255, 190, 140);
  rect(Xpos, 350, 70, 110); // 목
  fill(0);
  rect(Xpos, Ybody + 10, 150, 400); // 몸
  arc(Xpos - 75, Ybody, 250, 380, radians(180), radians(270));
  arc(Xpos + 75, Ybody, 250, 380, radians(270), radians(360));

  // 귀
  fill(255, 190, 140);
  ellipse(Xpos - 100, 230, 40, 60);
  ellipse(Xpos + 100, 230, 40, 60);
  ellipse(Xpos - 95, 200, 40, 50);
  ellipse(Xpos + 95, 200, 40, 50);

  // 귀의 안쪽
  fill("#F8CB9C");
  ellipse(Xpos - 100, 230, 25, 45);
  ellipse(Xpos + 100, 230, 25, 45);
  ellipse(Xpos - 95, 200, 25, 35);
  ellipse(Xpos + 95, 200, 25, 35);

  // 얼굴
  fill(255, 204, 153);
  ellipse(Xpos, 200, 200, 240);

  if (glassesOn) {
    if (glassColor >= 20) {
    glassColor = 200 - (timer*2) % 255; //점점 작아짐(검어짐)
    timer += 1;
    } glasses() 
  } else {
    if (glassColor <= 200) {
    glassColor = (timer*2) % 255;
    // 점점 커짐(하얘짐)
    timer += 1;
    glasses()
    }
  }

  //눈
  stroke(0);
  if (mouseIsPressed){
    //감은 눈
    strokeWeight(4);
    line(Xpos-55, 180, Xpos-25, 180);
    line(Xpos+55, 180, Xpos+25, 180);
  }
  else {
    //열린 눈
  fill(255);
  ellipse(Xpos - 40, 180, 30, 20);
  ellipse(Xpos + 40, 180, 30, 20);
  fill(0);
  ellipse(pupilX-40, pupilY, 10, 10);
  ellipse(pupilX+40, pupilY, 10, 10);
  }
  //눈썹
  strokeWeight(7);
  stroke(0);
  noFill();
  arc(Xpos - 40, 170, 30, 20, radians(200), radians(340));
  arc(Xpos + 40, 170, 30, 20, radians(200), radians(340));

  // 코
  fill(255, 190, 140);
  noStroke();
  quad(Xpos - 5, 190, Xpos + 5, 190, Xpos + 15, 235, Xpos - 15, 235);
  strokeWeight(3);
  stroke(0);
  line(Xpos - 5, 190, Xpos - 15, 235);
  line(Xpos + 5, 190, Xpos + 15, 235);
  arc(Xpos, 203, 30, 30, radians(250), radians(290));
  arc(Xpos, 235, 30, 15, 0, radians(180));
  arc(Xpos - 7, 237, 8, 5, radians(200), radians(20));
  arc(Xpos + 7, 237, 8, 5, radians(160), radians(-20));

  // 입
  noFill();
  stroke("#FC7E71");
  arc(Xpos, 260, 60, 30, 0, radians(180));

  // 머리카락
  stroke(0);
  fill(0);
  arc(Xpos, 140, 200, 150, radians(180), radians(0));

  // 구렛나루
  quad(Xpos - 100, 140, Xpos - 90, 140, Xpos - 95, 190, Xpos - 100, 170);
  quad(Xpos + 100, 140, Xpos + 90, 140, Xpos + 95, 190, Xpos + 100, 170);

  // 앞머리
  bezier(Xpos - 100, 140, Xpos - 100, 150, Xpos - 95, 165, Xpos - 30, 140);
  bezier(Xpos - 40, 140, Xpos - 70, 150, Xpos - 30, 165, Xpos + 30, 140);
  bezier(Xpos + 20, 140, Xpos - 10, 150, Xpos + 30, 165, Xpos + 100, 140);
}

function keyPressed() {
  if (key === "g" || key === "G") {
    timer = 0
    if (glassesOn) {
      glassesOn = false;
    }
    else {
      glassesOn = true;
    }
  }
  
  if (key === 's' || key === 'S') {
    saveGif('caricature', 10);
  }
}
  
function glasses() {
  // 안경
  stroke(0);
  stroke(glassColor);
  noFill();
  strokeWeight(3);
  ellipse(Xpos - 40, 180, 67, 67);
  ellipse(Xpos + 40, 180, 67, 67);
  line(Xpos - 5, 180, Xpos + 5, 180);
  line(Xpos - 75, 180, Xpos - 90, 150);
  line(Xpos + 75, 180, Xpos + 90, 150);
}