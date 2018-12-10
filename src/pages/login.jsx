import React, { Component } from 'react';
import Avatar from '@component/avatar';
import Input from '@component/input';
import Button from '@component/button';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        this.userName = React.createRef();
    }
    mul = n =>{
        const r = m => this.mul(n*m);                              
        r.valueOf = () => n;
        return r;
    }
    getUserName = (val)=>console.log('val',val);
    componentDidMount(){
        console.log(this.userName );
    }
    render(){
        return (
            <section className = "page-login">
                <Avatar src = {require('../asset/img/bg.png')} height = "80" width = "80" className = "login-avatar" />
                <ul>
                    <li><Input type="text" label="用户名" ref = { this.userName } placeholder = "请输入用户名" input = { this.getUserName } /></li>
                    <li><Input type="password" label="密码" placeholder = "请输入密码" input = { this.getUserName } /></li>
                    <li style = {{marginTop:'20px'}}><Button value = "登录" className = "large" /></li>
                </ul>
            </section>
        )
    }
}
export default Login;