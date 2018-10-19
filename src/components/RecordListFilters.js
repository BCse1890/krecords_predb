import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
// need to connect RecordListFilters to the store, so import connect
import { setTextFilter, SortByDojo, SortByGrade, setStartDate, setEndDate } from '../actions/filters';

export class RecordListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        if(e.target.value === 'mainDojo') {
            this.props.SortByDojo();
        } else if(e.target.value === 'gradeLevel') {
            this.props.SortByGrade();
        }
    };       
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                />
                <select 
                   value={this.props.filters.sortBy} 
                   onChange={this.onSortChange}
                >
                    <option value="mainDojo">Main Dojo</option>
                    <option value="gradeLevel">Grade Level</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    startDateId="start"
                    endDateId="end"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    SortByDojo: () => dispatch(SortByDojo()),
    SortByGrade: () => dispatch(SortByGrade()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordListFilters);