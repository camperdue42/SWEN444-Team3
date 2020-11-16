import React, {Component} from 'react';
import Banner from "./banner";
import "./css/entry.css";
import {Link} from "react-router-dom";

class Entry extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                   <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                   <Banner back="/mood"/>
                   <hr />
                  <div class="v18_50">
                      <Link to="/entries">
                          <div className="v18_6"></div>
                          <span className="v18_7">Save</span>
                      </Link>
                  </div>
                <div class="v18_41">
                    <span class="v18_5">(Optional) Tags:</span>
                    <div class="v18_17">
                        <div class="v18_10">
                        </div><div class="v18_16"></div>
                    </div>
                    <div class="v18_21">
                        <div class="v18_18"></div>
                        <div class="v18_20"></div>
                    </div>
                    <div class="v18_25">
                        <div class="v18_22"></div>
                        <div class="v18_24"></div>
                    </div>
                    <div class="v18_40">
                        <div class="v18_26"></div>
                        <span class="v18_27">. . . </span>
                    </div>
                </div>
                <div class="v18_49">
                    <span class="v18_4">(Optional) Hours of sleep: </span>
                    <div class="v18_48">
                        <div class="v18_45">
                            <input type="number" className="sleep"/>
                        </div>
                        <div class="v18_47"></div>
                    </div>
                </div>
                <div class="v18_51">
                   <textarea class="v18_2">(Optional) Write a little about your day.</textarea>
                </div>
                <div class="v18_39">
                    <button class="very-happy-button"></button>
                    <button className="slightly-happy-button"></button>
                    <button className="meh-button"></button>
                    <button className="slightly-sad-button"></button>
                    <button className="very-sad-button"></button>
                </div>
                <span class="v15_2">How are you <span style={{color: "#61BC67"}}>doing?</span></span>
                <Link to='/entries'>
                    <span className="v18_30">View all entries</span>
                </Link>
        </div>
        );
    }

} export default Entry;