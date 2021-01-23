// import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
// import DashboardPage from './pages/DashboardPage';
// import BlogPage from './pages/BlogPage';


function App() {
  return (
    <Switch>
        <Route exact path='/' render={props => <HomePage /> } />
    </Switch>
  );
}

export default App;
