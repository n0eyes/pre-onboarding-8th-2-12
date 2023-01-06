import styled from 'styled-components';
import { Suspense } from 'react';
import { useTargetUpdateContext } from './@hooks/common/useTargetContext';
import { Board } from './components/Board';
import ErrorBoundary from './components/common/ErrorBoundary';
import { ERROR } from './components/common/Error';

function App() {
  const clickHandler = useTargetUpdateContext();

  return (
    <>
      <ErrorBoundary fallback={<ERROR />}>
        <Layout onClick={clickHandler}>
          <Suspense fallback={<div>loading...</div>}>
            <Board />
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </>
  );
}

export default App;

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
`;
