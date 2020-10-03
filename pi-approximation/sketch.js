
let r = 200;

let total = 0;
let circle = 0;

let recordPI = 0;

function setup() {
  createCanvas(500, 500);
  background(0);
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(1);
  noFill();
  ellipse(0, 0, r*2, r*2);
  rectMode(CENTER);
  rect(0, 0, r*2, r*2);
}

function draw() {
  translate(width/2, height/2);

  for (let i = 0; i < 10000; i++) {
    let x = random(-r, r);
    let y = random(-r, r);
    total++;

    let d = x * x + y * y;
    if (d < (r * r)) {
      circle++;
      stroke(100, 255, 0, 100);
    } else {
      stroke(0, 100, 255, 100);
    }
    strokeWeight(1);
    point(x, y);

    let pi = 4 * (circle / total);
    let recordDiff = Math.abs(Math.PI - recordPI);
    let diff = Math.abs(Math.PI - pi);
    if (diff < recordDiff) {
      recordDiff = diff;
      recordPI = pi;
      console.log(recordPI);
    }
  }
}

