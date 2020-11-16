import './css/chat.css';
import React from 'react';
import Banner from './banner';
import './css/chat.css';
import {Link} from "react-router-dom";

// This Module defines the UI components of the Chat page

class ChatPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Banner back="/rating"/>
                    <hr />
                </div>
                <div class="body">
                    <Chat></Chat>
                    <Menu></Menu>
                </div>
            </div>
        );
    }
}



class Chat extends React.Component {
    render() {
        return (
            <div class="window">
              <div class="chat">
                  <div class="box">
                        <textarea class="textarea" name="message" rows="5">
                            Chat Away! :)
                        </textarea>
                        <button class="send-button">Send</button>
                  </div>
                </div>
            </div>
        );
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        common_facts : this.getCommonFacts()
                    }

    }

    getCommonFacts() {
        return (
            <>
            <div class="facts"> Likes Philidephia Eagles </div>
            <div class="facts"> Likes Garage Rock </div>
            </>
                );
    }

    render() {
        return (
            <div class="window">
              <div class="side-window">
                  <div class="side-box">
                    <div class="side-button-container">
                        <Link to="/rating">
                            <button className="end-button"> End Conversation</button>
                        </Link>
                        <Link to="/report">
                            <button className="report-button"></button>
                        </Link>
                    </div>
                    <div class="facts-grid">
                        <span class="facts" style={{color: "#61BC67"}}> <h3>Things you have in common:</h3></span>
                        {this.state.common_facts}
                    </div>
                  </div>
                </div>
            </div>

        );
    }
}


export default ChatPage;
