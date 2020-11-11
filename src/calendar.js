import React from 'react';
import Calendar from 'react-calendar';
import './css/calendar.scss';
import Banner from './banner';
import ReactModal from 'react-modal';

class CalendarPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: ['not-entered', 'very-happy', 'slightly-happy', 'meh', 'slightly-sad', 'very-sad'],
            selectedDate: '',
            modalIsOpen: false
        };
        this.tileClassName = this.tileClassName.bind(this);
        this.openModal = this.openModal.bind(this);
        this.onClickDay = this.onClickDay.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    onClickDay(value, event) {

        this.setState({selectedDate: value.toDateString()}, () => {this.openModal()});
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
                <ReactModal
                  isOpen={this.state.modalIsOpen}
                  className='modal'
                >
                    <h1>{this.state.selectedDate}</h1>
                    <p>Today I balanced some spreadsheets. It was just okay. Got some drinks with the boys.</p>
                    <h2>Mood: <span></span></h2>
                    <h2>Hours of sleep: 7</h2>
                    <h2>Tagged: </h2>


                </ReactModal>
                <Calendar className="react-calendar" tileClassName={this.tileClassName} onClickDay={this.onClickDay}/>
            </div>

        );
    }
}
export default CalendarPage;

