import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainApp from './pages/MainApp';
import AllProjects from './pages/AllProjects';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainApp} />
        <Route path="/all-projects" component={AllProjects} />
      </Switch>
    </Router>
  );
}

export default App;
