import React from 'react';
import Banner from "./banner";
import "./css/journal-survey.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class JournalSurvey extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="wrapper">

                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                    <Banner back="/"/>
                    <hr />
                    <Link to='/surveys'>
                        <div id="e1_64"></div>
                        <span id="e1_65">Survey</span>
                    </Link>
                    <Link to='/new-entry'>
                        <div id="e1_67"></div>
                        <span id="e1_68">Journal</span>
                    </Link>
            </div>
        );
    }

}

export default JournalSurvey;