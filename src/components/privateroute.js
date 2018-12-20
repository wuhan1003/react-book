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
            current = <Route path = { this.props.path } render = { props => <this.props.component { ...props } child = {this.props.child}  />} />
        }
        return(
            this.props.auth ? ( this.state.loginStatus ? current : <Redirect to = {{pathname:'/login'}} /> ) : current
        )
    }
}
// function f( route ){
//     const token = localStorage.getItem('token');
//     let r;
//      if( route.auth ){
//          if( token ){
//             route = <Route path = { this.props.path } render = { props => <this.props.component /> } />;
//          } else {
//            route = <Redirect to = {{pathname:'/login'}} />
//          }
//      } else {
//         <Route path = { this.props.path } render = { props => <this.props.component /> } />
//      }
//      return r;
// }
export default PrivateRoute;