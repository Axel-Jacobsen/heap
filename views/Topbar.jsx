'use babel';

import React from 'react'
import AddItem from './AddItem'
import DateTime from './DateTime'

/*
    Class for the topbar of the main page. Contains 'AddItem' component and 'DateTime' component
*/
export default class Topbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center topbar">
                {this.props.children}
            </div>
        )
    }

}