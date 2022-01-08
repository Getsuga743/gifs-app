import React, {useState} from 'react'
import { useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs'
import SearchBar from '../../components/SearchBar/SearchBar';
import { useGif } from '../../hooks/useGifs';
import { LayoutContainer } from '../../layout/LayoutContainer';
import { GifsContainer } from '../../components/ListOfGifs/styles';
import { Gif } from '../../components/Gif';

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [path,pushLocation] = useLocation();
    const handleSubmit = (value) => {
        setKeyword(value);
        pushLocation(`/search/${value}`);
    }
    
    const {loading,results:gifs} = useGif();
    return (
        <LayoutContainer>
            <SearchBar handleSubmit={handleSubmit}/>
            <h1>Your Latest Search</h1>
            <GifsContainer>
                {gifs && gifs.map((gif) => { return <Gif title={gif.title} url={gif.url} id={gif.id} key={gif.id} /> })}
            </GifsContainer>
        </LayoutContainer>
    )
}

export default Home
