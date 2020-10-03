
function Firework() {
  this.hu = random(255);
  this.rocket = new Particle(random(width), height, this.hu, true, 1, 255);
  this.exploded = false;
  this.particles = [];

  this.update = function() {
    if (!this.exploded) {
      this.rocket.applyForce(gravity);
      this.rocket.update();         
      if (this.rocket.vel.y >= 0)  {
        this.exploded = true;
        this.explode();
      }
    }

    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }

  }

  this.explode = function() {
    var pVel = random(0.8, 0.95);
    var lifespan = floor(random(150, 300));
    for (var i = 0; i < 100; i++) {
      this.particles.push(new Particle(this.rocket.pos.x, this.rocket.pos.y, this.hu, false, pVel, lifespan));
    }
  }

  this.done = function() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    }
    return false;
  }

  this.show = function() {
    if (!this.exploded) {
      this.rocket.show();
    }
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }

}
