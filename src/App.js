import React from 'react'
import HomePage from "./home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChatPage from "./chat";
import JournalSurvey from "./journal-survey";
import {Calendar} from "react-calendar";
import Rating from "./rating";
import Report from "./report";
import Entry from "./entry";
import CalendarPage from "./calendar";
import SurveyPage from "./survey";
import "./css/App.css";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/entries" component={CalendarPage}/>
          <Route path="/chat" component={ChatPage}/>
          <Route path="/mood" component={JournalSurvey}/>
          <Route path="/new-entry" component={Entry}/>
          <Route path="/rating" component={Rating}/>
          <Route path="/report" component={Report}/>
          <Route path="/surveys" component={SurveyPage}/>
        </Switch>
      </Router>

  );
}

export default App;
