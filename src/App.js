import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/album" component={SingleAlbum}/>
        <Route exact path="/playlist" component={Playlist}/>
        <Route exact path="/about" component={About}/>
        <Redirect to="/error"/>
      </Switch>
      
    </div>
  );
}

export default App;
