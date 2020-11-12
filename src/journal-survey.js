import React from 'react';
import Banner from "./banner";

class JournalSurvey extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="wrapper">
               <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
               <Banner />
               <div id="e1_64"></div>
                <span id="e1_65">Survey</span>
                <div id="e1_67"></div>
                <span id="e1_68">Journal</span>
            </div>
        );
    }

}

export default JournalSurvey;