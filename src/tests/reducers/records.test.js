import recordsReducer from '../../reducers/records';
import records from '../fixtures/records';

test('should set default state', () => {
    const state = recordsReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('remove record by id', () => {
    const action = {
        type: 'DELETE_RECORD',
        id: records[2].id
    };
    const state = recordsReducer(records, action);
    expect(state).toEqual([ records[0], records[1] ])
});

test('does not remove record if id not found', () => {
    const action = {
        type: 'DELETE_RECORD',
        id: 6000
    };
    const state = recordsReducer(records, action);
    expect(state).toEqual(records)
});

test('add a record', () => {
    const record = {
        id: '4',
        name: 'Terry McHugh',
        mainDojo: 'Stoke Gifford',
        gradeLevel: 5,
        gradingDate: 1032,
    };
    const action = {
        type: 'ADD_RECORD',
        record
    };
    const state = recordsReducer(records, action);
    expect(state).toEqual([ ...records, record ])
});

test('edit a record by id', () => {
    const note = 'Record 1 test note';
    const action = {
        type: 'EDIT_RECORD',
        id: records[1].id,
        updates: {
            note
        }
    };
    const state = recordsReducer(records, action);
    expect(state[1].note).toEqual(note);
});

test('does not edit record if id incorrect', () => {
    const note = 'Record 1 test note';
    const action = {
        type: 'EDIT_RECORD',
        id: '-63823',
        updates: {
            note
        }
    };
    const state = recordsReducer(records, action);
    expect(state).toEqual(records);
});

test('should set records', () => {
    const action = {
        type: 'SET_RECORDS',
        records: [records[1]]
    };
    const state = recordsReducer(records, action);
    expect(state).toEqual([records[1]]);
});