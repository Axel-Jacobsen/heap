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
        <Item className='item' key={item.id} value={item}></Item> // to be moved to items.js
      )
    
    return (
      <div>
        {html_items}
      </div>
    )
  }

}