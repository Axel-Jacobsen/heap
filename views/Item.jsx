'use babel'

const React = require('react');

/*
    Class for each individual item
*/
const Item = (props) => {
    return (
        <div className="horizontal item">
            <div className="date">{props.value.date}</div>
            <div className="name"> {props.value.name}</div>
            <div className="description">{props.value.description}</div>
        </div>
    )
}

export default Item;