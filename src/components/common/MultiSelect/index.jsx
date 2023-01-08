import React from 'react';
import { DropDown } from '../DropDown';

export const MultiSelect = (props) => {
  const { value, onChange, options } = props;

  return (
    <DropDown>
      <DropDown.Trigger trigger={<input />} />
      <DropDown.Menu>
        {options.map((option) => (
          <DropDown.Item key={option.id} value={option} />
        ))}
      </DropDown.Menu>
    </DropDown>
  );
};
