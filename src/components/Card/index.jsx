import React from 'react';
import { Styled } from './style';

export const Card = () => {
  return (
    <Styled.Root>
      <Styled.Title>Card</Styled.Title>
      <Styled.DeleteBtn>삭제</Styled.DeleteBtn>
    </Styled.Root>
  );
};
