import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'gradeLevel',
    startDate: undefined,
    endDate: undefined
};

const altfilters = {
    text: 'John Doe',
    sortBy: 'mainDojo',
    startDate: moment(0),
    endDate: moment(0).add(3, 'months')
};

export { filters, altfilters };