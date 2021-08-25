import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Meeting from "./pages/Meeting";

function App() {
return (
      <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Meeting} />
              <Route path='/host' component={() => <div>Hello</div>} />
            </Switch>
          </div>
      </Router>
);
}

export default App;