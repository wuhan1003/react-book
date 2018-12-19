import React, { Component } from 'react';
import FList from '@component/f-list';
class Chat extends Component{
    constructor( props ){
        super( props );
        this.state = {}
    }
    componentDidMount(){
    }
    render(){
        return(
            <section className = "page-chat">
                <FList { ...this.props } />
            </section>
        )
    }
}
export default Chat;