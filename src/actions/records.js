import uuid from 'uuid';
import moment from 'moment';

// ADD RECORD
export const addRecord = ( {name='', address='', contactTel='', email='', relativeName='',
    relativeContactTel='', mainDojo='', dateJoinClub=0, gradeLevel=10, 
    gradingDate=undefined, classesSinceGrading=0
    } = {} 
) => ({
    type: 'ADD_RECORD',
    record: {
        id: uuid(),
        name,
        mainDojo,
        gradeLevel,
        gradingDate,
        dateJoinClub,
        address,
        contactTel,
        email,
        relativeName,
        relativeContactTel,
        classesSinceGrading
    }
})

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