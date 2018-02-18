// Class that represents a single list item 
const React = require('react');

const Item = (props) => {    
    return (
        <div className="item">
            <p>{props.value.date} {props.value.name} {props.value.description}</p>
        </div>    
    )
}

export default Item;