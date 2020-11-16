import React from 'react';
import './css/banner.css';
import {Link} from "react-router-dom";

class Banner extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div class="wrapper">
                <Link to={this.props.back}>
                    <button className="back"></button>
                </Link>
                <Link to="/">
                    <button className="home"></button>
                </Link>
                <span class="right">
                    <span style={{color: '#61BC67'}}>Hi,</span> <span className='chet'>Chet!</span>
                </span>
            </div>
        );
    }
}
export default Banner;