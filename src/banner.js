import React from 'react';
import './css/banner.css';

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
                    <span style={{color: '#61BC67'}}>Hi,</span> {this.state.username}!
                </span>
            </div>
        );
    }
}
export default Banner;