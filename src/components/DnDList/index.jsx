import React from 'react';
import { useDnD } from '../../@hooks/common/useDnD';
import { Card } from '../Card';
import * as Styled from './style';

export const DnDList = ({ stateData }) => {
  const { id, state, issues } = stateData;
  const DnD = useDnD();

  return (
    <Styled.Root>
      <Styled.State>
        {state} {issues.length} <Styled.AddBtnIC>+</Styled.AddBtnIC>
      </Styled.State>
      <Styled.CardList data-state-id={id}>
        {issues.map((issue) => (
          <Card key={issue.id} issue={issue} DnD={DnD} />
        ))}
        <Styled.AddBtn>+</Styled.AddBtn>
      </Styled.CardList>
    </Styled.Root>
  );
};
