var fireworks = [];
var gravity;

function setup() {
  //noLoop();
  //createCanvas(800, 600);
  createCanvas(windowWidth, windowHeight*0.7);
  colorMode(HSB);
  this.gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
}

function mousePressed() {
  draw();
}

function draw() {
  //frameRate(20);
  colorMode(RGB);
  background(0, 25);
  //background(0);
  if (random(1) < 0.075) {
    this.fireworks.push(new Firework());
  }
  
  for (var i = fireworks.length - 1; i >= 0; i--) {
    this.fireworks[i].update();
    this.fireworks[i].show();
    if (this.fireworks[i].done()) {
        this.fireworks.splice(i, 1);
    }    
  }

  //console.log(floor(frameRate()));
}
