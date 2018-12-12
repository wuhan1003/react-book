import React, { Component } from 'react';
import { NavLink,Route } from 'react-router-dom';
import Chat from '@page/chat';
class LeftBar extends Component {
    constructor( props ){
        super( props ); 
        this.state = {}
    }
    componentDidMount(){
        console.log( this.props.match )
    }
    render(){
        return (
            <section>
            <aside className = "component-left-nav">
                <nav>
                    <NavLink to = {`${this.props.match.url}/chat`} activeClassName = "currentRoute"><i className="iconfont icon-atm"></i></NavLink>
                    {/* <NavLink to = {`${this.props.match.url}/chat`} activeClassName = "currentRoute"><i className="iconfont icon-atm"></i></NavLink> */}
                </nav>
            </aside>
                <Route path = "/" component = { Chat } />
            </section>
           
        )
    }
}
export default LeftBar;