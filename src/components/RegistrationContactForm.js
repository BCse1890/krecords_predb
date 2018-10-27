import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
//import 'react-dates/initialize';



const now = moment();
console.log(now.format('D MMM YYYY'));

export default class RegistrationContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: props.record ? props.record.address : '',
            contactTel: props.record ? props.record.contactTel : '',
            email: props.record ? props.record.email : '',
            relativeName: props.record ? props.record.relativeName : '',
            relativeContactTel: props.record ? props.record.relativeContactTel : '',
            dateJoinClub: props.record ? moment(props.record.dateJoinClub) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onAddressChange = (e) => {
        const address = e.target.value;
        this.setState(() => ({ address }));
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }

    onContactTelChange = (e) => {
        const contactTel = e.target.value;
        this.setState(() => ({ contactTel }));
    }

    onRelativeNameChange = (e) => {
        const relativeName = e.target.value;
        this.setState(() => ({ relativeName }));
    }

    onRelativeContactTelChange = (e) => {
        const relativeContactTel = e.target.value;
        this.setState(() => ({ relativeContactTel }));
    }

    onDateJoinChange = (dateJoinClub) => {
        if(dateJoinClub) {
            this.setState(() => ({ dateJoinClub }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();  // prevents full refresh

        if(!this.state.contactTel || !this.state.relativeName || !this.state.relativeContactTel) {
            this.setState(() => ({ error: 'Please provide Name, contact number, relative contact name and number'}));
        } else {
            this.setState(() => ({ error: ''}));
            console.log('submitted');
            this.props.onSubmit({
                address: this.state.address,
                contactTel: this.state.contactTel,
                email: this.state.email,
                relativeName: this.state.relativeName,
                relativeContactTel: this.state.relativeContactTel,
                dateJoinClub: this.state.dateJoinClub.valueOf(),
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
                        placeholder="Contact number"
                        value={this.state.contactTel}
                        onChange={this.onContactTelChange}
                    />
                    <br/>
                    <input 
                        type="text"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <br/>
                    <label>
                        Date joined club:  
                        <SingleDatePicker 
                            date={this.state.dateJoinClub}
                            onDateChange={this.onDateJoinChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={(day) => false}
                        />
                    </label>
                    <br/>
                    <input
                      type="text"
                      placeholder="Relative name"
                      value={this.state.relativeName}
                      onChange={this.onRelativeNameChange}
                    />
                    <br/>
                    <input 
                        type="text"
                        placeholder="Relative contact number"
                        value={this.state.relativeContactTel}
                        onChange={this.onRelativeContactTelChange}
                    />
                    <br/>
                    <textarea 
                      placeholder="Address"
                      value={this.state.address}
                      onChange={this.onAddressChange}
                    >
                    </textarea>
                    <button>Add Details</button>
                </form>
            </div>
        )
    }
}