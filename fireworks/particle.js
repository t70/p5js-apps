
function Particle(x, y, hu, rocket, pVel, lifespan) {
  this.pos = createVector(x, y);
  this.rocket = rocket;
  this.hu = hu;
  this.lifespan = lifespan;
  this.deltaLifespan = floor(random(2, 4));
  this.pVel = pVel;
  if (this.rocket) {
      this.vel = createVector(0, random(-15, -7));
      this.vel.rotate(random(-PI/15, PI/15));
  }
  else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(2, 10));
  }
  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    this.acc.add(force);
    if (!this.rocket) {
      this.acc.mult(random(0.2,1));
    }
  }

  this.update = function() {
    if (!this.rocket) {
      this.vel.mult(this.pVel);
      this.lifespan -= this.deltaLifespan;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
    if (this.lifespan <= 0) {
      return true;
    }
    return false;
  }

  this.show = function() {
    colorMode(HSB);
    if (!this.rocket) {
      strokeWeight(2);
      //console.log(floor(hu % 5));
      if (floor(hu % 5) < 2 ) {
         stroke(hu, 255, floor(sin(this.lifespan)*255), this.lifespan);
      } else {
         stroke(hu, 255, this.lifespan, this.lifespan);
      }
      //stroke(hu, 255, floor(sin(this.lifespan)*255), this.lifespan);
    } else {
      strokeWeight(4);
      //stroke(hu, 255, 255);
      stroke(0, 0, 100);
    }
    point(this.pos.x, this.pos.y);
  }

}
