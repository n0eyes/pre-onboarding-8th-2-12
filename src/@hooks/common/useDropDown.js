import React, { useState } from 'react';
import { useBoolean } from './useBoolean';

/** @deprecated */
export const useDropDown = (
  { initial, items } = { initial: [], items: [] }
) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedItems, setSelectedItems] = useState(initial);
  const [dropDownItems, setDropDownItems] = useState(items);

  const trigger = () => setIsOpened(true);
  const close = () => setIsOpened(false);
  const switchItem = (item) => setSelectedItems([item]);
  const addItem = (item) => {
    const exist = selectedItems.find((selected) => selected.id === item.id);

    if (!exist) setSelectedItems((prev) => [...prev, item]);
  };

  return {
    values: [isOpened, selectedItems, dropDownItems],
    handlers: [trigger, close, switchItem, addItem],
  };
};

export const useDropBox = () => {
  const [opened, open, close] = useBoolean();

  const onClick = (e) => {
    if (opened && e.target.closest('#trigger')) close();
    if (!opened && e.target.closest('#trigger')) {
      e.target.focus();
      open();
    }
  };

  const onBlur = () => {
    close();
  };

  const onMouseDown = (callback) => {
    return (e) => {
      if (e.target.closest('#item')) callback(e);
    };
  };

  return {
    values: { opened },
    handlers: { onClick, onBlur, onMouseDown },
  };
};
