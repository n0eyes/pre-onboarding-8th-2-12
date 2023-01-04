import styled from 'styled-components';

const Styled = {
  Root: styled.div``,

  Title: styled.header`
    min-width: 10rem;
    height: 3rem;
    line-height: 3rem;

    font-size: 2rem;
  `,

  Main: styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20%, auto));
  `,
};

export { Styled };
