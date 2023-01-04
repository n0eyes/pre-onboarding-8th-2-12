import styled from 'styled-components';

const Styled = {
  Root: styled.div``,

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
