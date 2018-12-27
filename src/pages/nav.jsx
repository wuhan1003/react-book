import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect  } from 'react-router-dom';
import LeftBar from '@component/leftbar';
class Nav extends Component {
   constructor( props ){
       super( props );
       this.state = {}
   }
    render(){
        return (
            <section className = "include-leftbar">
                <LeftBar { ...this.props } />
                <Switch>
                {
                    
                    this.props.routes && this.props.routes.map((route,key)=>(
                        <Route path = { route.path } exact = { route.exact } render = { props => <route.component { ...props } />} key={key} />
                        // <Route { ...route } key={key} />
                    ))
                }
                </Switch>
            </section>
        )
    }
}
export default Nav;