import React from 'react';

import { Card } from '../Card';
import * as Styled from './style';

export const DnDList = ({ state }) => {
  return (
    <Styled.Root>
      <Styled.State>
        {state} 3 <Styled.AddBtnIC>+</Styled.AddBtnIC>
      </Styled.State>
      <Styled.CardList>
        <Card />
        <Card />
        <Card />
        <Styled.AddBtn>+</Styled.AddBtn>
      </Styled.CardList>
    </Styled.Root>
  );
};