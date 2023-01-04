import React from 'react';
import { useFetchBoard } from '../../@hooks/quries/board';
import { DnDList } from '../DnDList';
import { Styled } from './style';

export const Board = ({ title = '제목 없음' }) => {
  const { data: board } = useFetchBoard();

  return (
    <Styled.Root>
      <Styled.Title contentEditable suppressContentEditableWarning>
        {board.title}
      </Styled.Title>
      <Styled.Main>
        {board.states.map(({ id, state, issues }) => (
          <DnDList key={id} state={state} issues={issues} />
        ))}
      </Styled.Main>
    </Styled.Root>
  );
};
