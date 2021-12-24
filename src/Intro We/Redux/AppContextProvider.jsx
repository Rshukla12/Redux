import React, { useEffect, useState } from "react";

export const AppContext = React.createContext();

export const AppContextProvider = ({store, children}) => {
  const [count, setCount] = useState(0);
useEffect(()=> {
  const unSubscribe = store.subscribe(() => {
    setCount((prev) => prev + 1);
  });
  return unSubscribe;
}, [count])

  return (
    <AppContext.Provider value={[ count, store ]} >
      { children }
    </AppContext.Provider>
  );
};