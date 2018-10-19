import React from 'react';
import { connect } from 'react-redux';
import RegistrationContactForm from './RegistrationContactForm';
import { editRecord, deleteRecord } from '../actions/records';

export class RegistrationContactPage extends React.Component {
    onSubmit = (record) => {
        this.props.editRecord(this.props.record.id, record);
        this.props.history.push('/');
    };
    onDelete = () => {
        console.log("Delete key pressed");
        this.props.deleteRecord({ id: this.props.record.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <RegistrationContactForm 
                    record={this.props.record}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onDelete}>Delete</button>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    record: state.records.find((record) => 
        record.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editRecord: (id, record) =>  dispatch(editRecord(id, record)),
    deleteRecord: (data) => dispatch(deleteRecord(data))
});

export default connect (mapStateToProps, mapDispatchToProps)(RegistrationContactPage);