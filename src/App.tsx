import React from "react";
import "./App.css";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Meeting from "./pages/Meeting";
import RequestMeeting from "./pages/RequestMeeting";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Meeting} />
          <Route path="/host" component={RequestMeeting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
