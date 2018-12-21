import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FList from '@component/f-list';
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
                    this.props.child && this.props.child.map((route,key)=><Route path = { route.path } render = {
                        props => <route.component { ...route } />
                    } key={key} />)
                }
                </Switch>
            </section>
        )
    }
}
export default Chat;