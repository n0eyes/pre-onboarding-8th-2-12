import { useCallback, useState } from 'react';

export const useInput = (init) => {
  const [value, setValue] = useState(init ?? '');

  const changeHandler = useCallback(
    ({ target: { value } }) => setValue(value),
    []
  );

  return [value, changeHandler];
};
