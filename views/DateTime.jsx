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
            500
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

    getMinute(i) {
        return (i < 10) ? "0" + i : i;
    }

    render() {
        return (
            <div className="datetime">
                <div className="time"> {this.state.date.getHours()}:{this.getMinute(this.state.date.getMinutes())} </div>
                <div className="currentdate"> {this.getMonth(this.state.date.getMonth())} {this.state.date.getDate()}, {this.state.date.getFullYear()} </div>
            </div>
        );
    }
}