
// create kRecords Reducer
const recordsReducerDefault = [];

const recordsReducer = (state = recordsReducerDefault, action) => {
    switch(action.type) {
        case 'ADD_RECORD':
            return [
                //spreads out all existing records in array
                // and adds on a new array through action.record
                ...state,
                action.record
            ];   
        case 'DELETE_RECORD':
            return state.filter(({ id }) => (id !== action.id) );
        case 'EDIT_RECORD':
            return state.map((record) => {
                    if(record.id === action.id) {
                        return {
                            ...record,
                            ...action.updates
                        }
                    } else {
                        return record;
                    }
                });
        default:
            return state;
    }
};

export default recordsReducer;