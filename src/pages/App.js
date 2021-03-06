import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot, setConfig } from 'react-hot-loader';
import Home from './home/HomeView';
import User from './user/UserView';
import Album from './album/AlbumView';
import NotFound from './not_found/NotFoundView';

setConfig({ logLevel: 'debug' });

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/user/:id" component={User} />
        <Route path="/album/:id" component={Album} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default hot(module)(App)
