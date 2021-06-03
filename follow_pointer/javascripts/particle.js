import { mouse, color } from './object.js';
export default class Particle {
  #x;
  #y;
  #size;
  #speedX;
  #speedY;
  #color;
  constructor() {
    this.#x = mouse.x;
    this.#y = mouse.y;
    this.#size = Math.random() * 8 + 1;
    this.#speedX = Math.random() * 2 - 1;
    this.#speedY = Math.random() * 2 - 1;
    this.#color = `hsl(${color.hue}, 100%, 50%)`;
  }
  get x() {
    return this.#x;
  }
  get y() {
    return this.#y;
  }
  get size() {
    return this.#size;
  }
  get color() {
    return this.#color;
  }
  update() {
    this.#x += this.#speedX;
    this.#y += this.#speedY;
    if (this.#size > 0.2) {
      this.#size -= 0.1;
    }
  }
  draw(ctx) {
    ctx.fillStyle = this.#color;
    ctx.beginPath();
    ctx.arc(this.#x, this.#y, this.#size, 0, Math.PI * 2);
    ctx.fill();
  }
}
