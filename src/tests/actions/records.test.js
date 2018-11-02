import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addRecord, editRecord, deleteRecord, startAddRecord, setRecords, startSetRecords } from '../../actions/records';
import records from '../fixtures/records';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const recordsData = {};
    records.forEach(({ id, name, address, contactTel, email, relativeName,
        relativeContactTel, mainDojo, dateJoinClub, gradeLevel, gradingDate, 
        classesSinceGrading }) => {
            recordsData[id] = { id, name, address, contactTel, email, relativeName,
                relativeContactTel, mainDojo, dateJoinClub, gradeLevel, gradingDate, 
                classesSinceGrading };
        });
    database.ref('records').set(recordsData).then(() => done());
})

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

// test('sets up add record action object', () => {
//     const newRecord = {
//         name: 'Jess Jo',
//         mainDojo: 'Keynsham',
//         gradeLevel: 3,
//         gradingDate: 15100
//     };

//     const action = addRecord(newRecord);
//     expect(action).toEqual({
//         type: 'ADD_RECORD',
//         record: {
//             ...newRecord,
//             id: expect.any(String)
//         }
//     });
// });

test('should set up add record action object with provided values', () => {
    const action = addRecord(records[2]);
    expect(action).toEqual({
        type: 'ADD_RECORD',
        record: records[2]
    });
});

test('should add record to database and store', (done) => {
    const store = createMockStore({});
    const recordData = {
        name: 'Jo Test', 
        address: 'TestPlace, TestTown', 
        contactTel: '2823923823', 
        email: 'jotest@test.com', 
        relativeName: 'testMum',
        relativeContactTel: '28329323829', 
        mainDojo: 'testDojo', 
        dateJoinClub: 0, 
        gradeLevel: 10, 
        gradingDate: 0, 
        classesSinceGrading: 0
    };
    // in this chained promise test waits until done is true
    store.dispatch(startAddRecord(recordData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_RECORD',
            record: {
                id: expect.any(String),
                ...recordData
            }
        }); 
        
        database.ref(`records/${actions[0].record.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(recordData);
            done(); 
    });
});


test('should add record with defaults to database and store', () => {
    const store = createMockStore({});
    const recordDefaults = {
        name: '', 
        address: '', 
        contactTel: '', 
        email: '', 
        relativeName: '',
        relativeContactTel: '', 
        mainDojo: '', 
        dateJoinClub: 0, 
        gradeLevel: 10, 
        gradingDate: 0, 
        classesSinceGrading: 0
    };
    // in this chained promise test waits until done is true
    store.dispatch(startAddRecord({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_RECORD',
            record: {
                id: expect.any(String),
                ...recordDefaults
            }
        }); 
        
        return database.ref(`records/${actions[0].record.id}`).once('value');   
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(recordDefaults);
        done();
    });  
});


test('should set up set record action object with data', () => {
    const action = setRecords(records);
    expect(action).toEqual({
        type: 'SET_RECORDS',
        records
    });
});

test('should retrieve records from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetRecords()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_RECORDS',
            records
        });
        done();
    })
});