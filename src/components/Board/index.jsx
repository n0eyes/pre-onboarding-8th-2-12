import React from 'react';
import { DnDList } from '../DnDList';
import { Styled } from './style';

export const Board = ({ title = '제목 없음' }) => {
  return (
    <Styled.Root>
      <Styled.Title contentEditable suppressContentEditableWarning>
        {title}
      </Styled.Title>
      <Styled.Main>
        <DnDList state="idle" />
        <DnDList state="pending" />
        <DnDList state="fulfilled" />
      </Styled.Main>
    </Styled.Root>
  );
};
