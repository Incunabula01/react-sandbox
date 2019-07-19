import React, { Component } from 'react';
import {createUseStyles} from 'react-jss'

import moment from 'moment';

import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const calendarTheme = createMuiTheme({

});

const calendarStyles = createUseStyles({
    calendar:{
        backgroundColor: 'White',
        padding: '0.25rem'
    },
    weekDay:{
        padding: '0.5rem',
        backgroundColor: 'SeaGreen',
        color: 'White'
    }
})




class Calendar extends Component{
    constructor(props){
        super(props);

        this.state = {
            dateObject: moment(),
            today: moment(),
            showMonthPopup: false,
            showYearPopup: false
        }
    }



    weekDays = moment.weekdays();
    weekDayShort = moment.weekdaysShort();


    year = ()=> {
        return this.state.dateObject.year()
    }

    render() {

        let weekDays = this.weekDayShort.map((day)=>{
            return (
                <th key={day} className={calendarStyles.weekDay}>
                    {day}
                </th>
            );
        })
        return (
            <ThemeProvider theme={calendarTheme}>

                <Container maxWidth="sm">
                    <header>
                        <h2>Calendar</h2>
                    </header>
                    <table className={calendarStyles.calender}>
                        <thead>
                        {weekDays}
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </Container>
            </ThemeProvider>
        )
    }


}

export default Calendar;