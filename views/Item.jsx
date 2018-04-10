'use babel'

const React = require('react');

/*
    Class for each individual item
*/
const Item = (props) => {
    return (
        <div className="horizontal item">
            <div className="name"> {props.value.name}</div>
            <div className="description">{props.value.description}</div>
            <div className="date">
                {props.value.dueDay} / {props.value.dueMonth}
            </div>
            {/* <div className="priority">{props.value.priority}</div> */}
        </div>
    )
}

export default Item;