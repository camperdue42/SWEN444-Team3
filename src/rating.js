import React from 'react';
import Banner from "./banner";
import './css/rating.css';
import StarRatingComponent from 'react-rating-stars-component';

class Rating extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='wrapper'>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                <Banner />
                <hr />
                <div class="v18_333">

                    <span class="v18_356">Please rate your chat to help improve your experience!</span>
                    <div class="v18_355">
                        <StarRatingComponent id={"stars"} size={200} color={"#aeaeae"} />
                    </div>
                    <div class="v18_359">
                        <button class="v18_357">Report User</button>
                    </div>
                </div>
            </div>
        );
    }



}

export default Rating;