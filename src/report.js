import React from 'react';
import Banner from "./banner";
import './css/report.css';
import {Dropdown, DropdownButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

class Report extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                <Banner/>
                <h1 id='title'>Report a User</h1>
                    <form onSubmit={alert("Report received.")}>
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
                        <input type='submit' value='Submit'/>
                    </form>
            </div>
        );
    }

}

export default Report;