/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react'
import { Route } from "wouter";

import ListOfGifs from './components/ListOfGifs';


function App() {
  const [keyword,setKeyword] = useState('panda')
  return (
    <div className="App">
      <section>
      <Route path="/gif/:keyword" component={ListOfGifs}/>
      </section>
    </div>
  )
}

export default App
