let starWidth = 0.5;
let starHeight = 1.5;
let Xbody=200, Ybody=530;

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
  
  noStroke();
  //목
  fill(255, 190, 140);
  rect(200, 350, 70, 110);
  //몸
  fill(0);
  rect(Xbody, Ybody+10, 150, 400);
  arc(Xbody-75, Ybody, 250, 380, radians(180), radians(270));
  arc(Xbody+75, Ybody, 250, 380, radians(270), radians(360));

  //귓볼
  fill(255, 190, 140);
  ellipse(100, 230, 40, 60);
  ellipse(300, 230, 40, 60);
  //귀
  ellipse(105, 200, 40, 50);
  ellipse(295, 200, 40, 50);
  //귀의 안
  fill("#F8CB9C");
  ellipse(100, 230, 25, 45);
  ellipse(300, 230, 25, 45);
  ellipse(105, 200, 25, 35);
  ellipse(295, 200, 25, 35);
    
  // 얼굴
  fill(255, 204, 153);
  ellipse(200, 200, 200, 240);

  // 안경
  stroke(0);
  noFill();
  strokeWeight(3);
  ellipse(160, 180, 67, 67);
  ellipse(240, 180, 67, 67);
  line(195, 180, 205, 180); // 코받침대
  line(125, 180, 110, 150);
  line(275, 180, 290, 150);

  // 눈
  fill(255);
  ellipse(160, 180, 30, 20);
  ellipse(240, 180, 30, 20);
  fill(0);
  ellipse(160, 180, 10, 10);
  ellipse(240, 180, 10, 10);
  //눈썹
  strokeWeight(7);
  stroke(0);
  noFill()
  arc(160, 170, 30, 20, radians(270-70),radians(270+70));
  arc(240, 170, 30, 20,radians(270-70),radians(270+70));

  // 코
  fill(255, 190, 140);
  noStroke();
  quad(195, 190, 205, 190, 215, 235, 185, 235)
  strokeWeight(3);
  stroke(0);
  line(195, 190, 185, 235);
  line(205, 190, 215, 235);
  arc(200, 203, 30, 30, radians(270-20), radians(270+20));
  //아래 부분
  arc(200, 235, 30, 15, 0, radians(180));
  arc(193, 237, 8, 5, radians(200), radians(20));
  arc(207, 237, 8, 5, radians(160), radians(-20));
  

  // 입
  noFill();
  stroke("#FC7E71");
  arc(200, 260, 60, 30, 0, radians(180));
  
  //머리카락
  stroke(0);
  fill(0);
  arc(200, 140, 200, 150, radians(180), radians(0));
  
  //구렛나루
  quad(100, 140, 110, 140, 105, 190, 100, 170);
  quad(300, 140, 290, 140, 295, 190, 300, 170);
  //앞머리
  bezier(100, 140, 100, 150, 105, 165, 170, 140);
  bezier(160, 140, 130, 150, 170, 165, 230, 140);
  bezier(220, 140, 190, 150, 230, 165, 300, 140);
}