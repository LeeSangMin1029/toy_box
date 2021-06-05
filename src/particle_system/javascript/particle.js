import { mouse, color, time } from './object.js';
export default class Particle {
  #x;
  #y;
  #size;
  #speedX;
  #speedY;
  #color;
  #consumption;
  constructor() {
    this.#x = mouse.x;
    this.#y = mouse.y;
    this.#size = Math.random() * 8 + 1;
    this.#consumption = -0.1;
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
  set size(size) {
    if (this.#size > 0.2) {
      this.#size = size;
    }
  }
  get color() {
    return this.#color;
  }
  update() {
    this.#x += this.#speedX;
    this.#y += this.#speedY;
    this.#size += this.#consumption * time.getSpeed();
  }
  draw(ctx) {
    ctx.fillStyle = this.#color;
    ctx.beginPath();
    ctx.arc(this.#x, this.#y, this.#size, 0, Math.PI * 2);
    ctx.fill();
  }
}
