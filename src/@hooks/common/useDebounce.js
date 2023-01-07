import { useCallback } from 'react';

let timer;

export const useDebounce = (DELAY = 500, deps = []) => {
  const debounce = useCallback(
    (callback) => (args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(args);
      }, DELAY);
    },
    deps
  );

  return debounce;
};
