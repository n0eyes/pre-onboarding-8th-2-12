import React from 'react';
import { Styled } from './style';

export const Card = ({ issue }) => {
  const { title } = issue;

  return (
    <Styled.Root>
      <Styled.Title>{title}</Styled.Title>
      <Styled.DeleteBtn>삭제</Styled.DeleteBtn>
    </Styled.Root>
  );
};
