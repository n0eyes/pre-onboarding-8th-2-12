import React, { useState } from 'react';
import { DropDown } from '../DropDown';

export const Select = (props) => {
  const { trigger, onChange, options } = props;

  return (
    <DropDown onChange={onChange}>
      <DropDown.Trigger trigger={trigger} />
      <DropDown.Menu>
        {options.map((option, i) => (
          <DropDown.Item key={i}>{option}</DropDown.Item>
        ))}
      </DropDown.Menu>
    </DropDown>
  );
};

export const MultiSelect = (props) => {
  const { trigger, onChange, options } = props;

  return (
    <DropDown onChange={onChange}>
      <DropDown.Trigger trigger={trigger} />
      <DropDown.Menu>
        {options.map((option, i) => (
          <DropDown.Item key={i}>{option}</DropDown.Item>
        ))}
      </DropDown.Menu>
    </DropDown>
  );
};

export const StateSelect = () => {
  const [selected, change] = useState('');
  const options = ['test1', 'test2'];

  const onChange = ({ target: { textContent: clicked } }) => change(clicked);

  return (
    <Select
      trigger={<button>{selected || '선택하기'}</button>}
      options={options}
      onChange={onChange}
      value={selected}
    />
  );
};

export const StateMultiSelect = () => {
  const [selected, change] = useState(['']);
  const options = ['test1', 'test2'];

  const onChange = ({ target: { textContent: clicked } }) => {
    const exist = selected.find((option) => option === clicked);

    if (!exist) change((prev) => [...prev, clicked]);
  };

  return (
    <MultiSelect
      trigger={<button>{selected.join('') || '선택하기'}</button>}
      options={options}
      onChange={onChange}
      value={selected}
    />
  );
};
