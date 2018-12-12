import React, { Component } from 'react';
class Scroll extends Component {
    constructor( props ){
        super( props );
        this.state = {}
    }
    scroll = (e)=>{
        console.log( e );
    }
    render(){
        return (
            <section className = {`component-scroll ${this.props.className}`} onScroll = { this.scroll }>
                { this.props.children }
            </section>
        )
    }
}
Scroll.defaultProps = {
    className: '',
}
export default Scroll;