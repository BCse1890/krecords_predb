import moment from 'moment';

// Get Visible Expenses
export default (records, { text, sortBy, startDate, endDate }) => {
//const getVisibleExpenses = (records, { text, gradingDate, sortBy, startDate, endDate }) => {
    return records.filter((record) => {
        // filter out if startDate not a number or record.created >= startDate;
        const gradeDateMoment = moment(record.gradingDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(gradeDateMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(gradeDateMoment, 'day') : true;
        
        const textNameMatch = record.name.toLowerCase().includes(text.toLowerCase());
        const textDojoMatch = record.mainDojo.toLowerCase().includes(text.toLowerCase());
        
            
        return startDateMatch && endDateMatch && textDojoMatch || textNameMatch;
    }).sort((a, b) => {
        if(sortBy === 'mainDojo') {
            return a.mainDojo < b.mainDojo ? -1 : 1;
        } else if(sortBy === 'gradeLevel') {
            return a.gradeLevel < b.gradeLevel ? 1 : -1;
        }
    });
};

// export default getVisibleExpenses;