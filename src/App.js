import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getRyan } from './ApiCalls';
import RyanProvider from './Contexts/RyanContext';
import Home from './Pages/Home/Home';
import './cssReset.css'
import './App.css';

const App = () => {
  return (
    <RyanProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/album" component={SingleAlbum}/>
          <Route exact path="/playlist" component={Playlist}/>
          <Route exact path="/about" component={About}/>
        <Redirect to="/error"/> */}
        </Switch>
      </div>
    </RyanProvider>
  );
}

export default App;