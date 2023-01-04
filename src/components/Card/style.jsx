import styled from 'styled-components';

const Styled = {
  Root: styled.li`
    display: flex;
    align-items: center;

    width: 100%;
    line-height: 3rem;

    border: 1px solid lightgray;

    padding: 1rem;

    &:hover {
      background-color: lightgray;

      & > button {
        visibility: visible;
      }
    }
  `,

  Title: styled.span``,

  DeleteBtn: styled.button`
    visibility: hidden;

    height: 3rem;
    box-sizing: content-box;

    margin-left: auto;

    color: gray;
    border: 1px solid white;
    background-color: white;

    &:hover {
      background-color: lightgray;
    }
  `,
};

export { Styled };
