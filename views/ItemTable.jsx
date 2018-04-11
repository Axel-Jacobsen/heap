'use babel';

import React from 'react'
import Item from './Item'

export default class ItemTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const items = this.props.items;

        const html_items = items.map(item =>
            <Item className='item' key={item.id} value={item} />
        )

        return (
            <div className="center">
                <div className="horizontal columnNames">
                    <p className="name">name</p>
                    <p className="description">description</p>
                    <p className="date">due date</p>
                </div>
                <div className="paper itemtable">
                    {html_items}
                </div>
            </div>
        )
    }

}
