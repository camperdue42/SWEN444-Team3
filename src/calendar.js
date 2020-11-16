import React from 'react';
import Calendar from 'react-calendar';
import './css/calendar.scss';
import Banner from './banner';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

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
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
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
                <Banner back="/new-entry"/>
                <hr />
                <Modal show={this.state.modalIsOpen} onHide={this.closeModal} className="modal">
                    <Modal.Header>
                        <Modal.Title className="modalTitle">
                            <h1>November 11, 2020</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Today I balanced some spreadsheets. It was just okay. Got some drinks with the boys.</p>
                        <h2>Mood:</h2>
                        <button class='mood'></button>
                        <div></div>
                        <h2>Hours of sleep: <span>7</span></h2>
                        <div></div>
                        <h2>Tagged: </h2>
                        <div className='tag'></div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal} className='closeButton'>Close</Button>
                    </Modal.Footer>

                </Modal>
                <Calendar className="react-calendar" tileClassName={this.tileClassName} onClickDay={this.onClickDay}/>
            </div>

        );
    }
}
export default CalendarPage;

