import React from 'react';
import { useFetchBoard, useUpdateBoardTitle } from '../../@hooks/queries/board';
import { editableHandler } from '../../utils/editableHandler';
import { DnDList } from '../DnDList';
import { Styled } from './style';

export const Board = () => {
  const { data: board } = useFetchBoard();
  const { mutate: updateTitle } = useUpdateBoardTitle();

  return (
    <Styled.Root>
      <Styled.Title
        contentEditable
        suppressContentEditableWarning
        {...editableHandler(updateTitle)}>
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
