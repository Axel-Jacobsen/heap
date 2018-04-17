'use babel'

import React from 'react'
import ItemTable from './ItemTable'
import TopBar from './TopBar'

import db from '../scripts/db'


// https://github.com/jamiebuilds/react-loadable //


/*
    Main class. Calls 'TopBar' component and 'ItemList' component
*/
export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.addItemToDb = this.addItemToDb.bind(this)
        this.removeFromItemList = this.removeFromItemList.bind(this)
        this.state = {
            items: [],
        }
    }

    // reload items from db
    componentDidMount() {
        this.dbToState()
    }

    componentWillUnmount() {
        db.close()
    }

    async dbToState() {
        const items = await db.getAllItemsAsync()
        items.sort((a, b) => {
            return b.priority - a.priority
        })
        this.setState({
            items: items,
        })
    }

    addItemToDb(item) {
        return db.addItem(item, 'items')
            .then(id => {
                this.dbToState()
            })
    }

    removeFromItemList(id) {
        this.dbToState()
    }

    render() {
        return (
            <div>
                <TopBar addItemToDb={this.addItemToDb} />
                <ItemTable items={this.state.items} removeFromItemList={this.removeFromItemList} />
            </div>
        )
    }

}
