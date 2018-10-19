import React from 'react';
import { connect } from 'react-redux';
import RecordListItem from './RecordListItem';
import selectRecords from '../selectors/records';


// props passed through from ConnectedRecordList below, drawing
// state.records prop from store
export const RecordList = (props) => (
    <div>
        {
            props.records.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.records.map((record) => {
                    return <RecordListItem key={record.id} {...record} />;
                })
            )
        }
        
    </div>
);

// connects to store and creates state.records as prop passed
// to RecordList function above

/* const ConnectedRecordList = connect((state) => {
    return {
        records: state.records
    }

})(RecordList);

export default ConnectedRecordList; */

// common not to create separate ConnectedRecordList variable but
// manage as an export default 
/* export default  connect((state) => {
    return {
        records: state.records
    }

})(RecordList); */


// we can pull out the state to props code and create const mapStateToProps
const mapStateToProps = (state) => {
    return {
        records: selectRecords(state.records, state.filters)
        // records: state.records,
        // filters: state.filters
    };
};

export default connect(mapStateToProps)(RecordList);