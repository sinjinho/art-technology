function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
  }
  
  function draw() {
    background(220);  
    
    //빨,파 네모
    strokeWeight(3);
    fill(255, 0, 0); //왼쪽
    stroke(0, 0, 255);
    rect(50, 100, 100, 200);
    fill(0, 0, 255); //오른쪽
    stroke(255, 0, 0);
    rect(350, 100, 100, 200);
    
    noStroke();
    fill(135, 206, 235);
    arc(100, 100, 200, 200, radians(90), radians(270));
    arc(0, 100, 200, 200, radians(270), radians(90));
    fill(255, 192, 203);
    arc(400, 100, 200, 200, radians(90), radians(270));
    arc(300, 100, 200, 200, radians(270), radians(90));
    
    //세모
    stroke(0);
    strokeWeight(2);
    noFill();
    triangle(0, 400, 400, 400, 200, 0);
    let x = [200, 250];
    let y = [0, 100];
    let mid_tri = 0;
    for (i=0; i<4; i++) {
      fill(mid_tri);
      quad(x[0], y[0], 400-x[0], y[0], x[1], y[1], 400-x[1], y[1]);
      x[0] -= 50; x[1] += 50;
      y[0] += 100; y[1] += 100;
      mid_tri += 85;
    }
    
    //가로선
    stroke(0);
    strokeWeight(1);
    line(0, 100, 400, 100);
    strokeWeight(3);
    line(0, 200, 400, 200);
    strokeWeight(5);
    line(0, 300, 400, 300);
    
    //원
    strokeWeight(3);
    fill(0, 255, 0);
    stroke(255, 255, 0);
    ellipse(200, 280, 250);
    fill(255, 255, 0);
    stroke(0, 255, 0);
    arc(200, 280, 250, 250, radians(80), radians(100));
    arc(200, 280, 250, 250, radians(200), radians(220));
    arc(200, 280, 250, 250, radians(320), radians(340));
  }