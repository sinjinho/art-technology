function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw(){
    if (mouseIsPressed) {
        fill(255, 0, 0);
        ellipse(mouseX, mouseY, 50, 50);
    }
}

function mousePressed(){
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 50, 50);
}