'use babel';

import React from 'react'

/*
    Class for the datetime component of the topbar
*/
export default class CurrentTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()};
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

    getMinute(i) {
        return (i < 10) ? "0" + i : i;
    }

    render() {
        return (
            <div className="currenttime"> 
                {this.state.date.getHours()}:{this.getMinute(this.state.date.getMinutes())}
            </div>
        );
    }
}