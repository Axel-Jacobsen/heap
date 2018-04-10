'use babel';

import React from 'react'
import Item from './Item'

/*
  Class for the datetime component of the topbar
*/
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
          <p className="nameCol">name</p>
          <p className="descriptionCol">description</p>
          <p className="dateCol">due date</p>
        </div>
	<div className="paper itemtable">
          {html_items}
	</div>
      </div>
    )
  }

}
