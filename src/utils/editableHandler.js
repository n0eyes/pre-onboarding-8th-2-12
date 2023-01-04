export const editableHandler = (updateMutate) => {
  return {
    onBlur: (e) => {
      updateMutate(e.target.textContent);
    },

    onKeyDown: (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
      }
    },
  };
};
