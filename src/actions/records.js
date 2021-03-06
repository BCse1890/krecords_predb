import uuid from 'uuid';
import database from '../firebase/firebase';
import moment from 'moment';

// ADD RECORD
export const addRecord = (record) => ({
    type: 'ADD_RECORD',
    record
});

export const startAddRecord = (recordData = {}) => {
    return (dispatch) => {
        const {
            name='', 
            address='', 
            contactTel='', 
            email='', 
            relativeName='',
            relativeContactTel='', 
            mainDojo='', 
            dateJoinClub=0, 
            gradeLevel=10, 
            gradingDate=0, 
            classesSinceGrading=0
        } = recordData;
        
        const record = {name, mainDojo, gradeLevel, gradingDate, dateJoinClub, 
            address, contactTel, email, relativeName, relativeContactTel, 
            classesSinceGrading };

        return database.ref('records').push(record).then((ref) => {
            dispatch(addRecord({
                id: ref.key,
                ...record
            }));
        });
    };
};

/* 
// ADD RECORD
export const addRecord = (record) => ({
    type: 'ADD_RECORD',
    record
});

export const startAddRecord = (recordData = {}) => {
    return (dispatch) =>  {
        const {
            name='', 
            address='', 
            contactTel='', 
            email='', 
            relativeName='',
            relativeContactTel='', 
            mainDojo='', 
            dateJoinClub=0, 
            gradeLevel=10, 
            gradingDate=0, 
            classesSinceGrading=0
        } = recordData;
        
        const record = {name, mainDojo, gradeLevel, gradingDate, dateJoinClub, 
            address, contactTel, email, relativeName, relativeContactTel, 
            classesSinceGrading };

        // return next line so that can use chained promises in test
        // records.test.js    
        database.ref('records').push(record).then((ref) => {
            dispatch(addRecord({
                id: ref.key,
                ...record
            }));
        });
    };
};
 */
// DELETE RECORD
export const deleteRecord = ({ id } = {}) => ({
    type: 'DELETE_RECORD',
    id
});

// EDIT RECORD
export const editRecord = (id, updates) => ({
    type: 'EDIT_RECORD',
    id,
    updates
});

// SET_RECORDS
export const setRecords = (records) => ({
    type: 'SET_RECORDS', 
    records
});


export const startSetRecords = () => {
    return (dispatch) => {
        return database.ref('records').once('value').then((snapshot) => {
            const records = [];
            
            snapshot.forEach((childSnapshot) => {
                records.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setRecords(records));
        });      
    };
};

