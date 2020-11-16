import React from 'react';
import './css/home.css';
import "react-router";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import JournalSurvey from "./journal-survey";
import ChatPage from "./chat";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
                <div className='wrapper'>
                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                    <div id="e1_30">
                        <div id="e1_2"></div>
                        <hr id="e1_36"/>
                            <span id="e1_37">Login</span>
                            <span id="e1_38">About</span>
                            <Link to='/chat'>
                                <div id="e1_64"></div>
                                <span id="e1_65">Chat</span>
                            </Link>
                            <Link to='/mood'>
                                <div id="e1_67"></div>
                                <span id="e1_68">Mood</span>
                            </Link>
                    </div>
                </div>



        );
    }
}

export default HomePage;