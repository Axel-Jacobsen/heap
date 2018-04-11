'use babel'

const React = require('react')

/*
    Class for each individual item
*/
export default class Item extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)

        this.state = {
            isClicked: false
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
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

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState(prevState => ({
                isClicked: false
            }))
        }
    }

    handleKeyPress(event) {
        console.log('FKC');
        
        if (event.key == 'Enter') {
            alert('enter press here! ')
        }
    }

    render() {
        let itemClasses = "horizontal item"

        if (this.state.isClicked) {
            itemClasses += " item-active"
        }

        return (
            <div className={itemClasses} onClick={this.handleClick} ref={this.setWrapperRef} onKeyPress={this.handleKeyPress}>
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
