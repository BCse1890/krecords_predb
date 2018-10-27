import React from 'react';
import { connect } from 'react-redux';
import RecordForm from './RecordForm';
import { startAddRecord } from '../actions/records';

export class AddRecordPage extends React.Component {
    onSubmit = (record) => {
        this.props.startAddRecord(record);
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
    startAddRecord: (record) => dispatch(startAddRecord(record))
    });

export default connect(undefined, mapDispatchToProps)(AddRecordPage);