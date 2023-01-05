import React, { memo } from 'react';
import { useDnD } from '../../@hooks/common/useDnD';
import { Card } from '../Card';
import { CreatingCard } from '../Card/CreatingCard';
import * as Styled from './style';

export const DnDList = memo(({ stateData, onDelete: deleteIssue }) => {
  const { id, state, issues } = stateData;
  const DnD = useDnD();

  return (
    <Styled.Root>
      <Styled.State>
        {state} {issues.length} <Styled.AddBtnIC>+</Styled.AddBtnIC>
      </Styled.State>
      <Styled.CardList data-state-id={id}>
        {issues.map((issue) => (
          <Card key={issue.id} issue={issue} DnD={DnD} onClick={deleteIssue} />
        ))}
        <CreatingCard />
        <Styled.AddBtn>+</Styled.AddBtn>
      </Styled.CardList>
    </Styled.Root>
  );
});
