import styled from 'styled-components';
import { css } from 'styled-components';
import { TextArea } from '../common/TextArea';

const Styled = {
  Root: styled.li`
    display: flex;
    align-items: center;
    flex-direction: ${({ column }) => column && 'column'};

    width: 100%;
    line-height: 3rem;

    border: 1px solid lightgray;

    ${({ position }) => {
      if (position === 'before')
        return css`
          border-top: 5px solid dodgerblue;
        `;

      if (position === 'after')
        return css`
          border-bottom: 5px solid dodgerblue;
        `;
    }}

    padding: 1rem;

    ${({ hover }) =>
      hover &&
      css`
        &:hover {
          background-color: lightgray;

          & > button {
            visibility: visible;
          }
        }
      `}
  `,

  Title: styled.span``,

  DeleteBtn: styled.button`
    visibility: hidden;

    height: 2.5rem;
    box-sizing: content-box;

    margin-left: auto;

    color: gray;
    border: 1px solid white;
    background-color: white;

    &:hover {
      background-color: lightgray;
    }
  `,

  TextArea: styled(TextArea)`
    width: 100%;

    border: none;
    border-bottom: 1px solid lightgray;

    resize: none;
  `,

  OwnerSearchForm: styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 0 0.5rem 0.5rem 0.5rem;
    margin-top: 1rem;

    border: 1px solid lightgray;
    border-radius: 0.5rem;
  `,

  OwnerSearchInput: styled.input`
    padding: 0.5rem;
    margin: 0 -0.5rem;

    border: none;
    outline: none;

    background-color: lightgray;
  `,

  OwnerList: styled.ul`
    display: flex;

    width: 100%;

    margin-top: 1rem;

    overflow: scroll;

    ${({ hover }) =>
      hover &&
      css`
        &:hover {
          background-color: lightgray;
        }
      `}

    ${({ searching }) =>
      searching
        ? css`
            max-height: 15rem;
            flex-direction: ${({ column }) => column && 'column'};
          `
        : css`
            & > li:not(:first-child) {
              margin-left: 0.5rem;
            }
          `};
  `,

  OwnerItem: styled.li`
    font-size: 1.5rem;
  `,
};

export { Styled };
