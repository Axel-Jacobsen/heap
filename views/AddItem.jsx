'use babel'

import React from 'react'

export default class AddItem extends React.Component {
    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleShowForm = this.toggleShowForm.bind(this);
        this.state = {
            showForm: false,
            formData: {}
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.addFormInput("creationTime", new Date().getTime())
        this.props.addItemToDb(this.state.formData);
    }

    handleChange(e) {
        this.addFormInput(e.target.name, e.target.value)
        console.log(e.target.name, e.target.value);
    }

    addFormInput(field, val) {
        let formData = Object.assign({}, this.state.formData);
        formData[field] = val;
        this.setState({formData});
    }

    toggleShowForm() {
        let nextState = !this.state.showForm
        this.setState({
            showForm: nextState
        });
    }

    render() {
        const showForm = this.state.showForm;

        return (
            <div className="addSection">
                <p className="add" onClick={this.toggleShowForm}>
                    +
                </p>
                
                { showForm ? (
                        <form onSubmit={this.handleSubmit}>
                            <input name="name" type="text" onChange={this.handleChange} />
                            <input name="dueDay" type="number" onChange={this.handleChange} />
                            <input name="dueMonth" type="number" onChange={this.handleChange} />
                            <input name="description" type="text" onChange={this.handleChange} />
                            <input name="priority" type="number" onChange={this.handleChange} />
                            <input type="submit" value="Submit" />
                        </form>
                    )
                    : null
                }

            </div>
        )
    }
}