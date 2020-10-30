import React from 'react';
import Calendar from 'react-calendar';
import './css/calendar.scss';
import Banner from './banner';

class CalendarPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { classes: ['not-entered', 'very-happy', 'slightly-happy', 'meh', 'slightly-sad', 'very-sad'] };
        this.tileClassName = this.tileClassName.bind(this);
    }


    tileClassName({date, view}) {
        if (view === 'month'){
            return this.state.classes[Math.floor(Math.random() * this.state.classes.length)];
        }

    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                <Banner />
                <Calendar className="react-calendar" tileClassName={this.tileClassName}/>
            </div>

        );
    }
}
export default CalendarPage;

