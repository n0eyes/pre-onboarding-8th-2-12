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
  // <Board
  //   title= 'adsf'
  //   data= {[
  //     {
  //       id: 1,
  //       state: 'idle',
  //       count: 2,
  //       issues: [
  //         {
  //           id:
  //           title:
  //           content:
  //           endDate:
  //           state:
  //           owner:

  //         }
  //       ]
  //   }
  //   ]}

  // />
};
