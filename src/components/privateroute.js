import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
class PrivateRoute extends Component {
    constructor( props ){
        super( props );
        this.state = {
            loginStatus : localStorage.getItem('token')
        }
    }
    render(){
        let current;
        if(this.props.redirect){
            current = <Redirect to = { this.props.redirect } />
        } else {
            current = <Route  { ...this.props } />
        }
        return(
            this.props.auth ? ( this.state.loginStatus ? current : <Redirect to = {{pathname:'/login'}} /> ) : <Route { ...this.props } />
        )
    }
}
export default PrivateRoute;