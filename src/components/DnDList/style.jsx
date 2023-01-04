import styled from 'styled-components';

const Root = styled.div``;

const State = styled.div`
  display: flex;
  align-items: center;

  height: 3rem;

  box-sizing: content-box;

  padding: 1rem 0 1rem 1rem;

  border: 1px solid white;

  &:hover {
    & > button {
      visibility: visible;
    }
  }
`;

const CardList = styled.ul`
  & > li:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const AddBtn = styled.button`
  width: 100%;
  height: 3rem;

  box-sizing: content-box;

  padding: 1rem 0;

  color: gray;
  border: 1px solid white;
  background-color: white;

  &:hover {
    background-color: lightgray;
  }
`;
const AddBtnIC = styled(AddBtn)`
  visibility: hidden;

  width: 3rem;
  height: 3rem;

  padding: 0;
  margin-left: auto;
`;

export { Root, State, CardList, AddBtn, AddBtnIC };
