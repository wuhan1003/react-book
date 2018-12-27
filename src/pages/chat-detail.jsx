import React, { Component } from 'react';
class ChatDetail extends Component {
    constructor( props ){
        super( props );
        this.state = {
            match : this.props.match,
        }
    }
    // componentDidMount(){
    //     console.log( this.props )
    // }
    render(){
        return (
            <section>
                <section style = {{width:'100px',height:'100px'}}>这是详情页面</section>
                <p>{this.props.match.params.name}</p>
            </section>
        )
    }
}
export default ChatDetail; 