export const editableHandler = (updateMutate) => {
  return {
    onBlur: (e) => {
      updateMutate(e.target.textContent);
    },

    onKeyPress: (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
      }
    },
  };
};
