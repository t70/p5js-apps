var bomb;
var gravity;
var wind;

function setup() {
  createCanvas(400, 300);
  gravity = createVector(0, 0.2);
  wind = createVector(0.05, 0);
  stroke(255);
  strokeWeight(4);
  bomb = new Particle(5, height);
}

function draw() {
  background(51);
  bomb.applyForce(gravity);
  bomb.applyForce(wind);
  bomb.update();
  bomb.show();
}
