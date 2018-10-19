

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

/* // SET_GRADEDATE_FILTER
export const setGradeDateFilter = (dateLastGrading) => ({
    type: 'SET_GRADEDATE_FILTER',
    dateLastGrading
}) */

// SET SORT BY DOJO
export const SortByDojo = () => ({
    type: 'SORT_BY_DOJO'
});

// SET SORT BY GRADE
export const SortByGrade = () => ({
    type: 'SORT_BY_GRADE'
});

// SET FILTER BY GRADEDATE
export const FilterByGradeDate = () => ({
    type: 'FILTER_BY_GRADEDATE'
});

// SET FILTER BY JOINDATE
export const FilterByJoinDate = () => ({
    type: 'FILTER_BY_JOINDATE'
});

// SET STARTDATE
export const setStartDate = (startDate) => ({
    type: 'SET_STARTDATE',
    startDate
});

// SET ENDDATE
export const setEndDate = (endDate) => ({
    type: 'SET_ENDDATE',
    endDate
});
