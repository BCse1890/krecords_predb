/* import selectRecords from '../../selectors/records';

const records = [{
    id: 'a',
    name: 'Bill Jo',
        mainDojo: 'Keynsham',
        gradeLevel: 3,
        gradingDate: 0,
    }, {
        id: 'b',
        name: 'Bo Ko',
        mainDojo: 'Emersons Green',
        gradeLevel: 4,
        gradingDate: 2,
    }, {
        id: 'c',
        name: 'See Yay',
        mainDojo: 'Filton',
        gradeLevel: 8,
        gradingDate: 24,
    }];
    

test('should filter by text value', () => {
    const filters = {
        text: 'B', 
        sortBy: 'mainDojo', 
        startDate: undefined, 
        endDate: undefined
    }
    const result = selectRecords(records, filters);
    expect(result).toEqual([records[1], records[0]]);
}) */