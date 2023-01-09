import React from 'react';
import { useDropBox } from '../../../@hooks/common/useDropDown';

export const DropDown = ({ children, onChange }) => {
  const {
    values: { opened },
    handlers: { onClick, onBlur, onMouseDown },
  } = useDropBox();
  const childList = React.Children.toArray(children);

  return (
    <div onClick={onClick} onBlur={onBlur} onMouseDown={onMouseDown(onChange)}>
      {childList.map((child) => {
        if (child.type.name === 'Menu' && !opened) return null;

        return React.cloneElement(child);
      })}
    </div>
  );
};

DropDown.Trigger = function Trigger({ trigger }) {
  return <span id="trigger">{trigger}</span>;
};

DropDown.Menu = function Menu({ children }) {
  return <ul>{children}</ul>;
};

DropDown.Item = function Item({ children: option }) {
  return <li id="item">{option}</li>;
};
