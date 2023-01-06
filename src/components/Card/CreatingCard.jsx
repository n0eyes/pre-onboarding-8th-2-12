import React, { useEffect } from 'react';
import { useTargetContext } from '../../@hooks/common/useTargetContext';
import {
  useCratingCardSearchForm,
  useCreatingCard,
} from '../../@hooks/ui/board';
import { Styled } from './style';

export const CreatingCard = ({ owners, createIssue, stateId }) => {
  const targetInfo = useTargetContext();
  const {
    values: { title, isSearching },
    handlers: { titleHandler, startSearch },
  } = useCreatingCard();
  const {
    values: { searchInput, searchedOwnerList, selectedOwnerList },
    handlers: { searchInputHandler, selectHandler, deleteHandler },
  } = useCratingCardSearchForm(owners);

  useEffect(() => {
    if (
      !targetInfo?.target.closest('button') &&
      !targetInfo?.target.closest('#creating')
    ) {
      createIssue({ title, selectedOwnerList, stateId });
    }
  }, [targetInfo]);

  return (
    <Styled.Root id="creating" column>
      <Styled.TextArea
        value={title}
        onChange={titleHandler}
        placeholder="제목을 입력하세요"
      />

      <CreatingCard.OwnerList onClick={startSearch} hidden={isSearching} />
      {isSearching && (
        <CreatingCard.OwnerSearchForm
          value={searchInput}
          onChange={searchInputHandler}
          onSelect={selectHandler}
          onDelete={deleteHandler}
          selectedOwnerList={selectedOwnerList}
          searchedOwnerList={searchedOwnerList}
        />
      )}
    </Styled.Root>
  );
};

CreatingCard.OwnerList = function OwnerList({ hidden, onClick: startSearch }) {
  return (
    <Styled.OwnerList onClick={startSearch} hover hidden={hidden}>
      <Styled.OwnerItem>담당자 선택</Styled.OwnerItem>
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
