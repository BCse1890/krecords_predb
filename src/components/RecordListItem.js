import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteRecord } from '../actions/records';


const RecordListItem = ({ id, name, mainDojo, gradeLevel, gradingDate, classesSinceGrading }) => (
    <div>
        <Link to={`/edit/${id}`}>
          <h3>Name: {name}</h3>
        </Link>
        <p>Main dojo: {mainDojo}</p>
        <p>Grade level: {gradeLevel}</p>
        <p>Grading date: {gradingDate}</p>
        <p>Classes since grading: {classesSinceGrading}</p>
        <Link to={`/contact/${id}`}>
          <h3>Registration and Contact details</h3>
        </Link>
        <br/>
    </div>
);


export default RecordListItem;