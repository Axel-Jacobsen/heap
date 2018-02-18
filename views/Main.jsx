'use babel';

import React from 'react';
import Item from './Item';
import db from '../scripts/db'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.dbToState();
  }

  render() {
    const items = this.state.items;

    const html_items = items.map(item => 
        <Item className='item' key={item.id} value={item}></Item> // to be moved to items.js
      )
    console.log(html_items);
    
    return (
      <div>
        {html_items}
        <b>fff</b>
      </div>
    )
  }

  async dbToState() {
    const items = await db.items.toArray();
    this.setState({
      items: items,
    })
  }

}