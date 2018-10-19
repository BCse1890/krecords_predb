import React from 'react';
import { connect } from 'react-redux';
import RecordForm from './RecordForm';
import { addRecord } from '../actions/records';

export class AddRecordPage extends React.Component {
    onSubmit = (record) => {
        this.props.addRecord(record);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
            <h1>Add Record</h1>
            <RecordForm 
              onSubmit={this.onSubmit}
            />
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
        addRecord: (record) => dispatch(addRecord(record))
    });

export default connect(undefined, mapDispatchToProps)(AddRecordPage);