'use babel';

import React from 'react'

/*
    Class for the datetime component of the topbar
*/
export default class DateTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    getMonth(month) {
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];
        return monthNames[month]
    }

    getMinute(minute) {
        if (minute < 10) {
            minute = "0" + minute;
        }
        return minute;
    }

    render() {
        return (
            <div>
                <div className="time"> {this.state.date.getHours()}:{this.getMinute(this.state.date.getMinutes())} </div>
                <div className="date"> {this.getMonth(this.state.date.getMonth())} {this.state.date.getDate()}, {this.state.date.getFullYear()} </div>
            </div>
        );
    }
}