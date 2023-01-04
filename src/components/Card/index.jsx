import React from 'react';
import { Styled } from './style';

export const Card = ({ issue, DnD }) => {
  const { title, id } = issue;

  const { positionInfo, handleDragStart, handleDragOver, handleDrop } = DnD;

  return (
    <Styled.Root
      draggable
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDrop={(e) => handleDrop(e, positionInfo)}
      data-id={id}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.DeleteBtn>삭제</Styled.DeleteBtn>
    </Styled.Root>
  );
};
