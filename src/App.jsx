/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react'
import { Route, Switch } from "wouter";
import  GifDetail  from './pages/Detail/';
import Home from './pages/Home/'
import ListOfGifs  from './components/ListOfGifs';
import Search from './pages/Search/Index';
import Detail from './pages/Detail/';


function App() {
  const [keyword, setKeyword] = useState('panda')
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={Search} />
        <Route path="/gif/:id" component={Detail} />
      </Switch>
    </div>
  )
}

export default App
