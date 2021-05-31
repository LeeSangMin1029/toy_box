const mouse = {
  x: undefined,
  y: undefined,
  set: function (x, y) {
    this.x = x;
    this.y = y;
  },
};

class Canvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  windowSetting() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  init() {
    this.event();
  }
  resize() {
    this.windowSetting();
  }
  draw() {
    this.ctx.fillStyle = 'blue';
    this.ctx.beginPath();
    this.ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2);
    this.ctx.fill();
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  event() {
    this.canvas.addEventListener('mousemove', (e) => {
      canvas.clear();
      mouse.set(e.x, e.y);
      this.draw();
    });
  }
}

const canvas = new Canvas('canvas1');
canvas.init();
window.addEventListener('resize', function () {
  canvas.resize();
});
