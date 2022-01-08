/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "wouter";
import  GifDetail  from './pages/Detail/';
import Home from './pages/Home/'
import ListOfGifs  from './components/ListOfGifs';
import SearchResults from './pages/SearchResults/Index';
import Detail from './pages/Detail/';
import { GifsContextProvider } from './context/GifsContext';


function App() {
  const [keyword, setKeyword] = useState('panda')
  return (
    <div className="App">
      <Switch>
        <GifsContextProvider>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
       
      </Switch>
    </div>
  )
}

export default App
