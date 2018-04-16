'use babel'

import React from 'react'
import CurrentTime from './CurrentTime'
import CurrentDate from './CurrentDate'

/*
    Class for the topbar of the main page. Contains 'AddItem' component and 'DateTime' component
*/
export default class Topbar extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.toggleShowForm = this.toggleShowForm.bind(this)
        this.state = {
            showForm: false,
            formError: null,
            formData: {}
        }
    }

    async handleSubmit(e) {
        e.preventDefault()
        await this.setState({
            formError: this.verifySubmit()
        })
        if (this.state.formError) return null;
        this.addFormInput('creationTime', new Date().getTime())
        this.props.addItemToDb(this.state.formData)
        document.getElementById('itemForm').reset()
        this.setState({
            showForm: false,
            formData: null
        })
    }

    handleChange(e) {
        let validCheck = this.verifyInput(e)
        let className = e.target.className

        if (validCheck.status === 'success') {
            if (className.includes('form-error')) {
                e.target.className = className.replace(/form-error/g, '')
                this.setState({
                    formError: null
                })
            }
            this.addFormInput(e.target.name, e.target.value)
        } else {
            if (!className.includes('form-error')) {
                e.target.className += 'form-error'
            }
            this.setState({
                formError: validCheck.message
            })
        }

    }

    verifyInput(e) {
        let result = {}
        switch (e.target.name) {
            case 'dueDay':
                if (e.target.value && (e.target.value < 1 || e.target.value > 31)) {
                    result.status = 'error'
                    result.message = 'day must be between 1 and 31'
                }
                break
            case 'dueMonth':
                if (e.target.value && (e.target.value < 1 || e.target.value > 12)) {
                    result.status = 'error'
                    result.message = 'month must be between 1 and 12'
                }
                break
            case 'priority':
                if (e.target.value && (e.target.value < 0 || e.target.value > 5)) {
                    result.status = 'error'
                    result.message = 'priority must be between 0 and 5'
                }
                break
        }

        if (!result.status) {
            result.status = 'success'
        }

        return result
    }

    verifySubmit(e) {
        let result = null
        let formData = this.state.formData;

        if (!formData.name) {
            result = 'the name is required'
        }

        if (!result && !formData.description) {            
            result = 'the description is required'
        }

        if (!result && !formData.dueDay) {
            result = 'the due day is required'
        }

        if (!result && !formData.dueMonth) {
            result = 'the due month is required'
        }

        if (!result && !formData.priority) {
            result = 'the priority is required'
        }

        return result
    }

    addFormInput(field, val) {
        let formData = Object.assign({}, this.state.formData)
        formData[field] = val
        this.setState({ formData })
    }

    toggleShowForm() {
        let nextState = !this.state.showForm
        this.setState({
            showForm: nextState,
            formError: null
        })
    }

    render() {
        const showForm = this.state.showForm
        const formError = this.state.formError
        const errorMessage = showForm && formError ? (<p className='error-message'>{formError}</p>) : null

        return (
            <div id='topbar' className='paper center'>
                <span className='horizontal topbar'>
                    <CurrentTime />
                    <CurrentDate />
                    <div className='add' onClick={this.toggleShowForm}>+</div>
                </span>

                {showForm ? (
                    <form onSubmit={this.handleSubmit} id='itemForm' className='horizontal itemForm'>
                        <input id='name' name='name' type='text' placeholder='name' onChange={this.handleChange} autoFocus />
                        <input id='description' name='description' type='text' placeholder='description' onChange={this.handleChange} />
                        <input id='dueDay' name='dueDay' type='number' placeholder='dd' onChange={this.handleChange} />
                        <input id='dueMonth' name='dueMonth' type='number' placeholder='mm' onChange={this.handleChange} />
                        <input id='priority' name='priority' type='number' placeholder='!' onChange={this.handleChange} />
                        <input type='submit' value='submit' />
                    </form>
                )
                    : null
                }

                {errorMessage}
            </div>
        )
    }
}
