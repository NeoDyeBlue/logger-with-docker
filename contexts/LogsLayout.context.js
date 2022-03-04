import { createContext, useState } from "react";

export const ClearedContentStateContext = createContext();

export const ClearedContentProvider = ({ children }) => {
  const [cleared, setCleared] = useState(false);

  return (
    <ClearedContentStateContext.Provider value={{ cleared, setCleared }}>
      {children}
    </ClearedContentStateContext.Provider>
  );
};
