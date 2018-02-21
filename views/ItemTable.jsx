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
      <Item className='item' key={item.id} value={item}></Item> // to be moved to items.js
    )

    return (
      <div className="itemList">
        {html_items}
      </div>
    )
  }

}