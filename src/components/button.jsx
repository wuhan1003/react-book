import React, { Component } from 'react';
class Button extends Component {
    render(){
        return (
            <section className = { `component-button ${ this.props.className }` }>
                <button onClick = { this.props.onClick }>{this.props.value}</button>
            </section>
        )
    }
}
export default Button;
Button.defaultProps = {
    className : true,
}