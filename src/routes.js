import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Timer from './components/Pomodoro/Timer';
import Todo from './components/Todo/Todo';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Error404 from './components/Error/404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/pomodoro" component={Timer} exact />
      <Route path="/todo" component={Todo} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/login" component={Login} exact />
      <Error404 component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
