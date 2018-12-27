import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FList from '@component/f-list';
import ChatDetail from './chat-detail';
class Chat extends Component{
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
        return(
            <section className = "page-chat">
                <FList { ...this.props } data = { this.state.data } />
                <Switch>
                {
                    this.props.routes && this.props.routes.map((route,key)=>(
                        <Route path = { route.path } exact = { route.exact } render = { props => <route.component { ...props } />} key={key} />
                    ))
                }
                </Switch>
            </section>
        )
    }
}
export default Chat;