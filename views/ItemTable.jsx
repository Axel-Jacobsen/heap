'use babel'

import React from 'react'
import Item from './Item'

export default class ItemTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const tagCategories = this.props.tagCategories

        if (Object.values(tagCategories).length === 0) {
            return (
                <div className="center">
                    <div className="paper message">
                        click the plus sign to add things to do!
                    </div>
                </div>
            )
        }

        let formattedTagsAndItems = []

        Object.keys(tagCategories).map(tag => {
            let html_items = tagCategories[tag].map(item => {                
                return <Item className='item'
                    key={item.id}
                    value={item}
                    removeFromItemList={this.props.removeFromItemList}
                />}
            )
            formattedTagsAndItems.push(
                <div key={tag}>
                    <div className='tag'> # {tag} </div>
                    <div className='paper itemtable' key={tag}>
                        {html_items}
                    </div>
                </div>
            )
        })

        return (
            <div className="center">
                <div className="horizontal columnNames">
                    <p className="name">name</p>
                    <p className="notes">notes</p>
                    <p className="date">due date</p>
                </div>
                <div>
                    {formattedTagsAndItems}
                </div>
            </div>
        )
    }

}
