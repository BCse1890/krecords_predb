import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
//import 'react-dates/initialize';



const now = moment();
console.log(now.format('D MMM YYYY'));

export default class RecordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.record ? props.record.name : '',
            mainDojo: props.record ? props.record.mainDojo : '',
            gradeLevel: props.record ? props.record.gradeLevel : 10,
            note: props.record ? props.record.note : '',
            gradingDate: props.record ? moment(props.record.gradingDate) : moment(),
            //dateJoinClub: props.record ? moment(props.record.dateJoinClub) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onDojoChange = (e) => {
        const mainDojo = e.target.value;
        this.setState(() => ({ mainDojo }));
    }

    onGradeChange = (e) => {
        const gradeLevel = e.target.value;
        this.setState(() => ({ gradeLevel }));
    }

    onGradingDateChange = (gradingDate) => {
        if(gradingDate) {
            this.setState(() => ({ gradingDate }));
        }
    }

    // onDateJoinChange = (dateJoinClub) => {
    //     if(dateJoinClub) {
    //         this.setState(() => ({ dateJoinClub }));
    //     }
    // }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();  // prevents full refresh

        if(!this.state.name || !this.state.gradeLevel || !this.state.mainDojo) {
            this.setState(() => ({ error: 'Please provide Name, Main Dojo and Grade Level'}));
        } else {
            this.setState(() => ({ error: ''}));
            console.log('submitted');
            this.props.onSubmit({
                name: this.state.name,
                mainDojo: this.state.mainDojo,
                gradeLevel: this.state.gradeLevel,
                gradingDate: this.state.gradingDate.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                      type="text"
                      placeholder="Name"
                      autoFocus
                      value={this.state.name}
                      onChange={this.onNameChange}
                    />
                    <br/>    
                    <input
                      type="text"
                      placeholder="Main Dojo"
                      value={this.state.mainDojo}
                      onChange={this.onDojoChange}
                    />
                    <br/>
                    <input 
                        input="number"
                        placeholder="Grade Level"
                        value={this.state.gradeLevel}
                        onChange={this.onGradeChange}
                    />
                    <br/>
                    <label>
                        Grading date:  
                        <SingleDatePicker 
                            date={this.state.gradingDate}
                            onDateChange={this.onGradingDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={(day) => false}
                        />
                    </label>
                    <br/>
                    <textarea 
                      placeholder="Add notes"
                      value={this.state.note}
                      onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add record</button>
                </form>
            </div>
        )
    }
}