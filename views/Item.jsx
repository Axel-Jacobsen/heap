'use babel'

import React from 'react'
import db from '../scripts/db'

/*
    Class for each individual item
*/
export default class Item extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)

        this.state = {
            isClicked: false
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    setWrapperRef(node) {
        this.wrapperRef = node
    }

    handleClick(e) {
        e.preventDefault()
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }))
    }

    handleClickOutside(e) {
        if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            this.setState(prevState => ({
                isClicked: false
            }))
        }
    }

    async handleKeyDown(e) {
        if (e.key == 'Backspace' && this.state.isClicked) {
            let itemId = this.props.value.id;
            await db.deleteItemByIdAsync(itemId)
            this.props.removeFromItemList(itemId)
        }
    }

    render() {
        let itemClasses = "horizontal item"

        if (this.state.isClicked) {
            itemClasses += " item-active"
        }

        return (
            <div className={itemClasses} onClick={this.handleClick} ref={this.setWrapperRef} onKeyDown={this.handleKeyDown}>
                <div className="name"> {this.props.value.name}</div>
                <div className="description">{this.props.value.description}</div>
                <div className="date">
                    {this.props.value.dueDay} / {this.props.value.dueMonth}
                </div>
                {/* <div className="priority">{this.props.value.priority}</div> */}
            </div>
        )
    }

}
