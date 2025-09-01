let img;

function preload() {
    img = loadImage('assets/rock.png');
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    image(img, 0, 0, 400, 400, 0, 0, 1500, 1500);
}