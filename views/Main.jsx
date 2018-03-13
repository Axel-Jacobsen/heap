'use babel';

import React from 'react'
import ItemTable from './ItemTable'
import TopBar from './TopBar'
import DateTime from './DateTime'
import AddItem from './AddItem'

import db from '../scripts/db'
import sha from 'sha.js'


// https://github.com/jamiebuilds/react-loadable //


/*
    Main class. Calls 'TopBar' component and 'ItemList' component
*/
export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this);
    this.state = {
      items: [],
    };
  }

  // reload items from db
  componentDidMount() {
    this.dbToState()
  }

  componentWillUnmount() {
    db.close()
  }

  async dbToState() {
    const items = await db.items.toArray();
    console.log(items);
    
    this.setState({
      items: items,
    })
  }

  addItem(item) {
    // Add the item to the db. This will give the item a unique primary key, returned
    // by the add operation. Assign that key to the object, and add the object to the state.
    let updatedItems = this.state.items;
    console.log(updatedItems);
    item.hash = this.hashItem(item);

    db.items.add(item)
      // .then(id => {
      //     console.log('item.id = ', id);
      //     this.dbToState();
      // })
      .then(id => {
        item.id = id;
        console.log('item.id = ', item.id)
        updatedItems.push(item);
        this.setState({
          items: updatedItems
        })
        return Promise.resolve(item.id)
      })
      .catch(err => {
        if (err.stack.includes("ConstraintError: Unable to add key to index 'hash'")) {
          console.error("This is a duplicate")
        } else {
          throw err;
        }
      })
  }

  hashItem(item) {
    let hashItem = {
      name: item.name,
      priority: item.priority,
      dueDay: item.dueDay,
      dueMonth: item.dueMonth,
      description: item.description 
    }
    return sha('sha256').update(JSON.stringify(hashItem)).digest('hex')
  }

  render() {
    return (
      <div>
        <TopBar>
          <DateTime />
          <AddItem addItem={this.addItem} />
        </TopBar>
        <ItemTable items={this.state.items} />
      </div>
    )
  }

}
