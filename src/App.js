import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RyanProvider, { RyanContext } from './Contexts/RyanContext';
import Home from './Pages/Home/Home';
import AlbumInfo from './Pages/AlbumInfo/AlbumInfo';
import About from './Pages/About/About';
import Playlist from './Pages/Playlist/Playlist';
import Nav from './Components/Nav';
import Error from './Pages/Error/Error';
import './cssReset.css';
import './App.css';

const App = () => {
  return (
    <RyanProvider>
      <section className="nav">
        <Nav />
      </section>
      <section className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/album/:id" component={AlbumInfo} />
          <Route exact path="/playlist" component={Playlist} />
          <Route exact path="/about" component={About} />
          <Route exact path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
      </section>
    </RyanProvider>
  );
};

export default App;
