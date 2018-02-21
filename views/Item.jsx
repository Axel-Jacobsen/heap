'use babel'

const React = require('react');

/*
    Class for each individual item
*/
const Item = (props) => {
    return (
        <div className="item">
            <p>{props.value.date} {props.value.name} {props.value.description}</p>
        </div>
    )
}

export default Item;