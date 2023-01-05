import React, { useEffect } from 'react';
import { useInput } from '../../@hooks/common/useInput';
import { useTargetContext } from '../../@hooks/common/useTargetContext';
import {
  useCratingCardSearchForm,
  useCreatingCard,
} from '../../@hooks/ui/board';
import { Styled } from './style';

export const CreatingCard = ({ owners }) => {
  const [value, changeHandler] = useInput();
  const targetInfo = useTargetContext();
  const {
    values: { isSearching },
    handlers: { startSearch },
  } = useCreatingCard();
  const {
    values: { searchInput, searchedOwnerList, selectedOwnerList },
    handlers: { searchInputHandler, selectHandler, deleteHandler },
  } = useCratingCardSearchForm(owners);

  useEffect(() => {
    if (targetInfo?.target.closest('li')?.id === 'creating') {
      console.log('creating');
    }
  }, [targetInfo]);

  return (
    <Styled.Root id="creating" column>
      <Styled.TextArea
        value={value}
        onChange={changeHandler}
        placeholder="제목을 입력하세요"
      />

      {isSearching ? (
        <CreatingCard.OwnerSearchForm
          value={searchInput}
          onChange={searchInputHandler}
          onSelect={selectHandler}
          onDelete={deleteHandler}
          selectedOwnerList={selectedOwnerList}
          searchedOwnerList={searchedOwnerList}
        />
      ) : (
        <CreatingCard.OwnerList onClick={startSearch} />
      )}
    </Styled.Root>
  );
};

CreatingCard.OwnerList = function OwnerList({ onClick: startSearch }) {
  return (
    <Styled.OwnerList onClick={startSearch} hover>
      <Styled.OwnerItem>seyeon</Styled.OwnerItem>
      <Styled.OwnerItem>seyeon</Styled.OwnerItem>
    </Styled.OwnerList>
  );
};

CreatingCard.OwnerSearchForm = function OwnerSearchForm({
  value,
  onChange: changeHandler,
  onSelect: selectHandler,
  onDelete: deleteHandler,
  selectedOwnerList,
  searchedOwnerList,
}) {
  return (
    <Styled.OwnerSearchForm>
      <Styled.OwnerSearchInput
        placeholder="이름을 입력하세요"
        value={value}
        onChange={changeHandler}
        autoFocus
      />
      <Styled.OwnerList>
        {selectedOwnerList.map(({ id, name }) => (
          <Styled.OwnerItem
            key={id}
            onClick={() => selectHandler({ id, name })}>
            {name} <button onClick={() => deleteHandler(id)}>x</button>
          </Styled.OwnerItem>
        ))}
      </Styled.OwnerList>
      <Styled.OwnerList column searching>
        {searchedOwnerList.map(({ id, name }) => (
          <Styled.OwnerItem
            key={id}
            onClick={() => selectHandler({ id, name })}>
            {name}
          </Styled.OwnerItem>
        ))}
      </Styled.OwnerList>
    </Styled.OwnerSearchForm>
  );
};
