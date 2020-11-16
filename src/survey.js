import React, {Component} from "react";
import Banner from "./banner";
import "./css/survey.css";

class SurveyPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Banner back="/mood"/>
                <hr />
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                <span class="v27_17">
                    Select a test to <span style={{color: "#61BC67"}}>begin...</span>
                </span>
                <div class="tests">
                    <div className="v27_26">
                    </div>
                    <div className="v27_27">
                    </div>
                    <div className="v27_28">
                    </div>
                    <div className="v27_29">
                    </div>
                    <div className="v27_30">
                    </div>
                    <div className="v27_31">
                    </div>
                    <div className="v27_32">
                    </div>
                    <div className="v27_33">
                    </div>
                    <span className="v27_34">
            Basics
        </span>
                    <span className="v27_35">
            Big 5 Traits
        </span>
                    <span className="v27_36">
            Myers-Briggs
        </span>
                    <span className="v27_38">
            Forms of Expression
        </span><span className="v27_39">
            Relationships
        </span>
                    <span className="v27_40">
            Mindsets
        </span>
                    <span className="v27_41">
            Work Ethics
        </span>
                    <span className="v27_42">
            Current Events
        </span>
                </div>

            </div>
        );
    }

} export default SurveyPage;