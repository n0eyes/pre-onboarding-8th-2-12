const DELAY = 500;
let timer;

export const debounce = (callback) => {
  const debounced = (args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, DELAY);
  };

  return debounced;
};
