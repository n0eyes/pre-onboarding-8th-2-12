import { useState } from 'react';

export const useBoolean = (initial = false) => {
  const [boolean, setBoolean] = useState(initial);

  const setTrue = () => setBoolean(true);
  const setFalse = () => setBoolean(false);

  return [boolean, setTrue, setFalse];
};
