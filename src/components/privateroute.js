import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
class PrivateRoute extends Component {
    constructor( props ){
        super( props );
        this.state = {
            loginStatus : localStorage.getItem('token')
        }
    }
    componentDidMount(){
        
    }
    render(){
        return(
            this.props.auth ? ( this.state.loginStatus ? <Route { ...this.props } /> : <Redirect to = {{pathname:'/login'}} />): <Route { ...this.props } />
        )
    }
}
export default PrivateRoute;