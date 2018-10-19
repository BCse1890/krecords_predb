import React from 'react';
import RecordList from './RecordList';
import RecordListFilters from './RecordListFilters';

const EntryPage = () => (
    <div>
        <RecordListFilters />
        <RecordList/>
    </div>
);


export default EntryPage;