import styled from 'styled-components';
import { Suspense } from 'react';
import { useTargetUpdateContext } from './@hooks/common/useTargetContext';
import { Board } from './components/Board';

function App() {
  const clickHandler = useTargetUpdateContext();

  return (
    <>
      <Layout onClick={clickHandler}>
        <Suspense fallback={<div>loading...</div>}>
          <Board />
        </Suspense>
      </Layout>
    </>
  );
}

export default App;

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
`;
