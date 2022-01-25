import React, { useState, useMemo } from 'react';

const GifContext = React.createContext({ gifs: {}, setGifs: () => {} });

export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);
  const value = useMemo(() => ({ gifs, setGifs }), [gifs]);
  return (
    <GifContext.Provider value={value}>
      {children}
    </GifContext.Provider>
  );
}

export default GifContext;
