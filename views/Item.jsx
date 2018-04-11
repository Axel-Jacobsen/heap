'use babel'

const React = require('react');

/*
    Class for each individual item
*/

export default class ItemTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="horizontal item">
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
