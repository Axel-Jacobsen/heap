'use babel';

import React from 'react'
import ItemTable from './ItemTable'
import TopBar from './TopBar'
import db from '../scripts/db'

/*
  Main class. Calls 'TopBar' component and 'ItemList' component
*/
export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    };
  }

  // reload items from db
  componentDidMount() {
    this.dbToState()
  }

  componentWillUnmount() {
    this.db.close()
  }

  async dbToState() {
    const items = await db.items.toArray();
    this.setState({
      items: items,
    })
  }

  render() {
    return (
      <div>
        <TopBar />
        <ItemTable items={this.state.items} />
      </div>
    )
  }

}