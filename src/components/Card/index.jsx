import React from 'react';
import { Styled } from './style';

export const Card = ({ issue, DnD }) => {
  const { title, id } = issue;

  const {
    positionInfo: { position, targetId },
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  } = DnD;

  return (
    <Styled.Root
      draggable
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      data-id={id}
      {...(targetId === id ? { position } : null)}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.DeleteBtn>삭제</Styled.DeleteBtn>
    </Styled.Root>
  );
};
