import { mouse, time } from './object.js';
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
    this.#canvas.width = window.innerWidth;
    this.#canvas.height = window.innerHeight;
    this.#width = window.innerWidth;
    this.#height = window.innerHeight;
  }
  init() {
    this.event();
  }
  resize() {
    this.windowSizeSetting();
  }
  event() {
    window.addEventListener('keydown', e => {
      switch (e.key - 0) {
        case 1:
          time.up();
          break;
        case 2:
          time.down();
          break;
      }
    });
    window.addEventListener('resize', () => {
      this.resize();
    });
    this.#canvas.addEventListener('mousemove', e => {
      mouse.set(e.x, e.y);
      for (let i = 0; i < particleHandler.add_number; i++) {
        particleHandler.add();
      }
    });
    this.#canvas.addEventListener('click', e => {
      mouse.set(e.x, e.y);
      for (let i = 0; i < 10; i++) {
        particleHandler.add();
      }
    });
    this.#canvas.addEventListener('contextmenu', e => {
      e.preventDefault();
    });
    this.#canvas.addEventListener('wheel', e => {
      e.preventDefault();
      const number = e.deltaY * -0.01;
      particleHandler.add_number += number;
    });
  }
}
