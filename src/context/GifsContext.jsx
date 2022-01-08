import React , {useState} from 'react';

const GifContext = React.createContext({message:'you don have access to these context'});

export function GifsContextProvider({ children }) {
    const [gifs, setGifs] = useState([])

    return (<GifContext.Provider value={gifs}>
        {children}
    </GifContext.Provider>)
}