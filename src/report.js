import React from 'react';
import Banner from "./banner";
import './css/report.css';
import {Link} from "react-router-dom";


class Report extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                <Banner back="/"/>
                <h1 id='title'>Report a User</h1>
                <div id='form'>
                    <form>
                        <label>
                            Reason for Reporting:
                            <select>
                                <option>Select...</option>
                                <option>Harassment</option>
                                <option>Hate Speech</option>
                                <option>I'm worried about them</option>
                            </select>
                        </label>
                        <label>
                            Details (optional):
                            <textarea></textarea>
                        </label>
                        <Link to="/">
                            <input type='submit' value='Submit'/>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }

}

export default Report;