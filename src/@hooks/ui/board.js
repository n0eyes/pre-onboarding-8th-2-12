import { useEffect, useState } from 'react';
// import { debounce } from '../../utils/debounce';
import { useDebounce } from '../common/useDebounce';
import { useInput } from '../common/useInput';

export const useCreatingCard = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [title, titleHandler] = useInput();
  const [isSearching, setIsSearching] = useState(false);

  const startSearch = () => setIsSearching(true);
  const finishSearch = () => setIsSearching(false);
  const toggleSearch = () => setIsSearching((prev) => !prev);

  const startCreating = () => setIsCreating(true);
  const finishCreating = () => setIsCreating(false);

  return {
    values: {
      title,
      isSearching,
      isCreating,
    },
    handlers: {
      startSearch,
      finishSearch,
      toggleSearch,
      startCreating,
      finishCreating,
      titleHandler,
    },
  };
};

export const useCratingCardSearchForm = (owners) => {
  const debounce = useDebounce();
  const [searchInput, searchInputHandler] = useInput();
  const [selectedOwnerList, setSelectedOwnerList] = useState([]);
  const [searchedOwnerList, setSearchedOwnerList] = useState([]);

  const selectHandler = (owner) => {
    const exist = selectedOwnerList.find(
      (selected) => selected.id === owner.id
    );

    if (!exist) setSelectedOwnerList((prev) => [...prev, owner]);
  };

  const deleteHandler = (id) => {
    const newSelectedOwnerList = selectedOwnerList.filter(
      (selected) => selected.id !== id
    );

    setSelectedOwnerList(newSelectedOwnerList);
  };

  const debouncedSearch = debounce(() => {
    const searched = owners.filter((owner) => owner.name === searchInput);

    setSearchedOwnerList(searched);
  });

  useEffect(() => {
    debouncedSearch();
  }, [searchInput]);

  return {
    values: { searchInput, searchedOwnerList, selectedOwnerList },
    handlers: { searchInputHandler, selectHandler, deleteHandler },
  };
};
