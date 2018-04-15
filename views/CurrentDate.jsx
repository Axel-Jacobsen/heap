'use babel';

import React from 'react'

/*
    Class for the datetime component of the topbar
*/
export default class CurrentDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() };
    }

    getMonth(month) {
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
        ];
        return monthNames[month]
    }

    render() {
        return (
            <div className="currentdate">
                {this.getMonth(this.state.date.getMonth())} {this.state.date.getDate()}, {this.state.date.getFullYear()}
            </div>
        );
    }
}
