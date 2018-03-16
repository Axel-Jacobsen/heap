'use babel'

import React from 'react'

export default class AddItem extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {}
    }

    handleSubmit(e) {
        e.preventDefault();
        this.addFormInput("creationTime", new Date().getTime())
        this.props.addItem(this.state);
    }

    handleChange(e) {
        this.addFormInput(e.target.name, e.target.value)
        console.log(e.target.name, e.target.value);
        
    }

    addFormInput(field, val) {
        this.setState({
            [field]: val
        })
    }

    render() {
        return (
            <div>
                <div className="add">
                    +
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input name="name" type="text" onChange={this.handleChange} />
                    <input name="dueDay" type="number" onChange={this.handleChange} />
                    <input name="dueMonth" type="number" onChange={this.handleChange} />
                    <input name="description" type="text" onChange={this.handleChange} />
                    <input name="priority" type="number" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}