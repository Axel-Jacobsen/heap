'use babel'

import React from 'react'
import DateTime from './DateTime'


/*
    Class for the topbar of the main page. Contains 'AddItem' component and 'DateTime' component
*/
export default class Topbar extends React.Component {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.toggleShowForm = this.toggleShowForm.bind(this)
        this.state = {
            showForm: false,
            formData: {}
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.addFormInput("creationTime", new Date().getTime())
        this.props.addItemToDb(this.state.formData)
    }

    handleChange(e) {
        this.addFormInput(e.target.name, e.target.value)
        console.log(e.target.name, e.target.value)
    }

    addFormInput(field, val) {
        let formData = Object.assign({}, this.state.formData)
        formData[field] = val
        this.setState({formData})
    }

    toggleShowForm() {
        let nextState = !this.state.showForm
        this.setState({
            showForm: nextState
        })
    }

    render() {
        const showForm = this.state.showForm

        return (
            <div className="center">
                <div className="topbar">
                    <DateTime />
                    <p className="add" onClick={this.toggleShowForm}>+</p>
                </div>

                { showForm ? (
                        <form onSubmit={this.handleSubmit} className="itemForm">
                            <input autoFocus id="name" name="name" type="text" placeholder="name" onChange={this.handleChange} />
                            <input id="description" name="description" type="text" placeholder="description" onChange={this.handleChange} />
                            <input id="dueDay" name="dueDay" type="number" placeholder="dd" onChange={this.handleChange} />
                            <input id="dueMonth" name="dueMonth" type="number" placeholder="mm" onChange={this.handleChange} />
                            <input id="priority" name="priority" type="number" placeholder="!" onChange={this.handleChange} />
                            <input type="submit" value="submit" />
                        </form>
                    )
                    : null
                }

            </div>
        )
    }
}