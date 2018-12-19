import React, { Component } from 'react';
import LeftBar from '@component/leftbar';
// import { BrowserRouter as Router, Route,NavLink } from 'react-router-dom';
import Chat from '@page/chat';
class Index extends Component {
    constructor( props ){
        super( props );
        this.state = {
            data:[
                {
                    name:'test1',
                    path:'test1'
                },
                {
                    name:'test2',
                    path:'test2'
                }
            ]
        }
    }
    componentDidMount(){
        console.log( this.props )
    }
    render(){
        return (
            <section className="page-index include-leftbar">
                <LeftBar { ...this.props } />
                <section className = "main">
                    <Chat { ...this.props } data = { this.state.data} />
                </section>
            </section>
        )
    }
}
export default Index;