import Canvas from './canvas.js';
import { color } from './object.js';
import { animate } from './animation.js';
import { particleHandler } from './handler.js';
try {
  const canvas = new Canvas('canvas1');
  const context = canvas.getCtx();
  particleHandler.ctx = context;
  canvas.init();
  const circlePainting = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    color.hue++;
    particleHandler.update();
  };
  animate(circlePainting);
} catch (e) {
  console.error(e);
}
