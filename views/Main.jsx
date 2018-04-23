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
            tagCategories: {},
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
        const tagCategories = {}
        
        items.map(item => {
            console.log('stuff');
            console.log(item.tag); console.log(Object.keys(tagCategories));

            if (Object.keys(tagCategories).indexOf(item.tag) < 0) {
                tagCategories[item.tag] = [item]
            } else {
                tagCategories[item.tag] = tagCategories[item.tag].concat([item])
            }
        })
        this.setState({
            tagCategories: tagCategories,
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
                <ItemTable tagCategories={this.state.tagCategories} removeFromItemList={this.removeFromItemList} />
            </div>
        )
    }

}
