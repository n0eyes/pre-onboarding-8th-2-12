import React, { createContext, useCallback, useState } from 'react';

export const TargetContext = createContext();
export const TargetUpdateContext = createContext();

export const TargetContextProvider = ({ children }) => {
  const [targetInfo, setTargetInfo] = useState(null);

  const clickHandler = useCallback((e) => setTargetInfo(e), []);

  return (
    <TargetContext.Provider value={targetInfo}>
      <TargetUpdateContext.Provider value={clickHandler}>
        {children}
      </TargetUpdateContext.Provider>
    </TargetContext.Provider>
  );
};
