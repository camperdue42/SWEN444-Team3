import React from 'react';
import './css/home.css';

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
                        <div id="e1_64"></div>
                        <span id="e1_65">Chat</span>
                        <div id="e1_67"></div>
                        <span id="e1_68">Mood</span>
                </div>
            </div>


        );
    }
}

export default HomePage;