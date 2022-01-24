/* eslint-disable react/jsx-key */
import React from 'react';
import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults/Index';
import Detail from './pages/Detail';
import { GifsContextProvider } from './context/GifsContext';

function App() {
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
  );
}

export default App;
