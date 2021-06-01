const animate = (animationcallback) => {
  let start = new Date().getTime();
  const callback = () => {
    let ts = new Date().getTime();
    if (ts - 1000 > start) {
      start = new Date().getTime();
    }
    animationcallback();
    requestAnimationFrame(callback);
  };
  return requestAnimationFrame(callback);
};

export { animate };
