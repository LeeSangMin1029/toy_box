import Particle from './particle.js';
class HandleParticle {
  #particles;
  #ctx;
  #add_number;
  constructor() {
    this.#particles = [];
    this.#add_number = 3;
  }
  get add_number() {
    return this.#add_number;
  }
  set add_number(add_number) {
    if (add_number > 8) {
      return;
    }
    this.#add_number = add_number < 0 ? 0 : add_number;
  }
  set ctx(ctx) {
    this.#ctx = ctx;
  }
  get ctx() {
    return this.#ctx;
  }
  add() {
    this.#particles.push(new Particle());
  }
  update() {
    for (let i = 0; i < this.#particles.length; i++) {
      this.#particles[i].update();
      this.#particles[i].draw(this.#ctx);
      for (let j = i; j < this.#particles.length; j++) {
        const dx = this.#particles[i].x - this.#particles[j].x;
        const dy = this.#particles[i].y - this.#particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 70) {
          this.#ctx.beginPath();
          this.#ctx.strokeStyle = this.#particles[i].color;
          this.#ctx.lineWidth = 1;
          this.#ctx.moveTo(this.#particles[i].x, this.#particles[i].y);
          this.#ctx.lineTo(this.#particles[j].x, this.#particles[j].y);
          this.#ctx.stroke();
          this.#ctx.closePath();
        }
      }
      if (this.#particles[i].size <= 0.2) {
        this.#particles.splice(i, 1);
        i--;
      }
    }
  }
}
const particleHandler = new HandleParticle();
export { particleHandler };
