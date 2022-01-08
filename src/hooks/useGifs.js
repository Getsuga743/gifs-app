import { getGifs } from "../services/getGifs";
import { useState, useEffect } from 'react';

export const useGif = ({keyword} = {keyword:null})=>{
    const [gifs, setGifs] = useState({ loading: false, results: [] });
    const {loading,results} = gifs;
    const keywordToUse = keyword || localStorage.getItem("LastKeyword")
    useEffect(()=> {
        async function getData(){
            setGifs({ loading: true, results: [] });
            const actualGifs = await getGifs({ keyword });
            setGifs(() => ({ loading: false, results: actualGifs }));
            localStorage.setItem("LastKeyword",keyword);
        }
        getData();
    }, [keyword])
    return {loading,results};
}