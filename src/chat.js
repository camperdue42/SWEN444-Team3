import './chat.css';
import React from 'react';
import ReactDOM from 'react-dom';

// This Module defines the UI components of the Chat page

class ChatPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Banner></Banner>
                </div>
                <div class="body">
                    <Chat></Chat>
                    <Menu></Menu>
                </div>
            </div>
        );
    }
}

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        username : "Chet"
                     };
    }

    render() {
        return ( 
            <div class="wrapper">
                <button class="back"></button>
                <button class="home"></button>
                <span class="right">
                    Hi, {this.state.username}!
                </span>
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
                        <button class="end-button"> End Conversation </button>
                        <button class="report-button"></button>
                    </div>
                    <div class="facts-grid">
                        <div class="facts"> Things you have in common: </div>
                        {this.state.common_facts}
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}


export default ChatPage;
