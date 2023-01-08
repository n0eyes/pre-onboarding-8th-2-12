import React from 'react';

export const DropDown = ({ children }) => {
  return <div>{children}</div>;
};

DropDown.Trigger = function Trigger({ trigger }) {
  return trigger;
};

DropDown.Menu = function Menu({ children }) {
  return <ul>{children}</ul>;
};

DropDown.Item = function Item({ option }) {
  return <li>{option}</li>;
};
