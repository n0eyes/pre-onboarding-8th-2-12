import { useState } from 'react';

export const useBoolean = (initial = false) => {
  const [boolean, setBoolean] = useState(initial);

  const setTrue = () => setBoolean(true);
  const setFalse = () => setBoolean(false);
  const toggle = () => setBoolean((prev) => !prev);

  return [boolean, setTrue, setFalse, toggle];
};
