import { Suspense } from 'react';
import { Board } from './components/Board';

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Board />
    </Suspense>
  );
}

export default App;
