import React, { useState } from 'react';
import { useInput } from '../../@hooks/common/useInput';
import { useTargetContext } from '../../@hooks/common/useTargetContext';
import { editableHandler } from '../../utils/editableHandler';
import { Styled } from './style';

export const CreatingCard = ({ owner }) => {
  const [value, changeHandler] = useInput();
  const targetInfo = useTargetContext();
  const [isSearching, setIsSearching] = useState(false);

  const clickHandler = () => setIsSearching((prev) => !prev);

  return (
    <Styled.Root column>
      <Styled.TextArea
        value={value}
        onChange={changeHandler}
        placeholder="제목을 입력하세요"
      />

      {isSearching ? (
        <CreatingCard.OwnerSearchForm />
      ) : (
        <CreatingCard.OwnerList onClick={clickHandler} />
      )}
    </Styled.Root>
  );
};

CreatingCard.OwnerList = function OwnerList({ onClick: clickHandler }) {
  return (
    <Styled.OwnerList onClick={clickHandler}>
      <Styled.OwnerItem>seyeon</Styled.OwnerItem>
      <Styled.OwnerItem>seyeon</Styled.OwnerItem>
    </Styled.OwnerList>
  );
};

CreatingCard.OwnerSearchForm = function OwnerSearchForm() {
  return (
    <Styled.OwnerSearchForm>
      <Styled.OwnerSearchInput placeholder="이름을 입력하세요" />
      <Styled.OwnerList column searching>
        <Styled.OwnerItem>seyeon</Styled.OwnerItem>
        <Styled.OwnerItem>seyeon</Styled.OwnerItem>
      </Styled.OwnerList>
    </Styled.OwnerSearchForm>
  );
};
