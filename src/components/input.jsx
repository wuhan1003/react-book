import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Input extends Component {
    constructor( props ){
        super( props );
        this.state = {}
    }
    change = e => {
        this.props.input(e.target.value);
    }
    render(){
        return (
            <section className = {`component-input ${this.props.className}`}>
                {this.props.label && <label style={{width:this.props.labelWidth}}>{this.props.label}</label>}
                <p><i></i><input type = {this.props.type} onInput = { this.change } placeholder= { this.props.placeholder } /></p>
            </section>
        )
    }
}
Input.defaultProps = {
    className:'',
    type:'text',
}
Input.propTypes = {
    input:PropTypes.func,
    blur:PropTypes.func,
    focus:PropTypes.func,
    change:PropTypes.func
}
export default Input;