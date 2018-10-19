import { addRecord, editRecord, deleteRecord } from '../../actions/records';

test('sets up delete record action object', () => {
    const action = deleteRecord({ id: '123abc' });
    expect(action).toEqual({
        type: 'DELETE_RECORD',
        id: '123abc'
    });
});

test('sets up edit record action object', () => {
    const action = editRecord('123abc', {note: 'This is the updated note'});
    expect(action).toEqual({
        type: 'EDIT_RECORD',
        id: '123abc',
        updates: {
            note: 'This is the updated note'
        }
    });
});

test('sets up add record action object', () => {
    const newRecord = {
        name: 'Jess Jo',
        mainDojo: 'Keynsham',
        gradeLevel: 3,
        gradingDate: 15100,
    };

    const action = addRecord(newRecord);
    expect(action).toEqual({
        type: 'ADD_RECORD',
        record: {
            ...newRecord,
            id: expect.any(String)
        }
    });
});

test('sets up add record action object with default values', () => {
    const action = addRecord();
    expect(action).toEqual({
        type: 'ADD_RECORD',
        record: {
            name: '',
            mainDojo: '',
            gradeLevel: 10,
            gradingDate: 0,
            id: expect.any(String)
        }
    })
})