import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Avatar extends Component {
    constructor( props ){
        super( props );
        this.state = {}
    }
    render(){
        return (
            <section className ={ `component-avatar ${this.props.className}`}>
                <img src = { this.props.src } alt = { this.props.src } width = { this.props.width} height = { this.props.height }  />
            </section>
        )
    }
}
export default Avatar;
Avatar.defaultProps = {
    width:'100',
    height:'100',
    className:'',
}
Avatar.propTypes = {
    src:PropTypes.string.isRequired
}