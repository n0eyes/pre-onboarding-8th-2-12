import React from 'react';

import { Card } from '../Card';
import * as Styled from './style';

export const DnDList = ({ state, issues }) => {
  return (
    <Styled.Root>
      <Styled.State>
        {state} {issues.length} <Styled.AddBtnIC>+</Styled.AddBtnIC>
      </Styled.State>
      <Styled.CardList>
        {issues.map((issue) => (
          <Card key={issue.id} issue={issue} />
        ))}
        <Styled.AddBtn>+</Styled.AddBtn>
      </Styled.CardList>
    </Styled.Root>
  );
};
