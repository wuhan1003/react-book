import React, { Component } from 'react';
class ChatDetail extends Component {
    constructor( props ){
        super( props );
        this.state = {
            match : this.props.match,
        }
    }
    componentDidMount(){
        console.log( this.props )
    }
    render(){
        return (
            <section>
                <p>{this.state.match.params.name}</p>
            </section>
        )
    }
}
export default ChatDetail;