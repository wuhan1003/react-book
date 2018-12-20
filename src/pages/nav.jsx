import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import LeftBar from '@component/leftbar';
class Nav extends Component {
    componentDidMount(){
        console.log( this.props )
    }
    render(){
        return (
            <section className = "include-leftbar">
                <LeftBar { ...this.props } />
                {
                    this.props.child && this.props.child.map((route,key)=>(
                        // <Route path = { route.path } render = { props => <route.component { ...props } child = {route.child} />} key={key} />
                        <Route { ...route } key={key} />
                    ))
                }
            </section>
        )
    }
}
export default Nav;