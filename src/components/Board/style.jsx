import styled from 'styled-components';

const Styled = {
  Root: styled.div`
    width: 100rem;
    min-height: 50rem;
    max-height: 60rem;

    padding: 3rem;
    border: 1px solid lightgray;

    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    overflow-y: scroll;
  `,

  Title: styled.header`
    min-width: 10rem;
    height: 3rem;
    line-height: 3rem;

    font-size: 2rem;
    font-weight: bold;

    margin-bottom: 1rem;
  `,

  Main: styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20%, auto));
    grid-gap: 1rem;
  `,
};

export { Styled };
