import { mouse } from './object.js';
import { particleHandler } from './handler.js';
export default class Canvas {
  #canvas;
  #width;
  #height;
  constructor(canvasId) {
    this.#canvas = document.getElementById(canvasId);
    this.#canvas.width = window.innerWidth;
    this.#canvas.height = window.innerHeight;
    this.#width = window.innerWidth;
    this.#height = window.innerHeight;
  }
  get width() {
    return this.#width;
  }
  get height() {
    return this.#height;
  }
  getCtx() {
    return this.#canvas.getContext('2d');
  }
  windowSizeSetting() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.#width = this.canvas.width;
    this.#height = this.canvas.height;
  }
  init() {
    this.event();
  }
  resize() {
    this.windowSizeSetting();
  }
  event() {
    window.addEventListener('resize', function () {
      this.resize();
    });
    this.#canvas.addEventListener('mousemove', (e) => {
      mouse.set(e.x, e.y);
      for (let i = 0; i < 5; i++) {
        particleHandler.add();
      }
    });
    this.#canvas.addEventListener('click', (e) => {
      mouse.set(e.x, e.y);
      for (let i = 0; i < 10; i++) {
        particleHandler.add();
      }
    });
  }
}
