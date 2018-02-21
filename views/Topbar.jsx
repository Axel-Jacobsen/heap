'use babel';

import React from 'react'
import DateTime from './DateTime'

export default class Topbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <DateTime />
        )
    }

}