import React, { Component } from 'react';
import Avatar from '@component/avatar';
import Input from '@component/input';
import Button from '@component/button';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
        this.userName = React.createRef();
    }
    mul = n =>{
        const r = m => this.mul(n*m);                              
        r.valueOf = () => n;
        return r;
    } 
    getUserName = (e,a)=>{
        this.setState({[a]:e.target.value});
    };
    loginIn = (e) => {
        e.preventDefault();
        const { history } = this.props;
        console.log( this.state.username,this.state.password );
        localStorage.setItem('token','true');
        history.push('/');
    }
    componentDidMount(){
        console.log( this.props.history );
    }
    render(){
        return (
            <section className = "page-login">
                <Avatar src = {require('../asset/img/bg.png')} height = "80" width = "80" className = "login-avatar" />
                <ul>
                    <li>
                        <Input 
                            type="text" 
                            label="用户名" 
                            ref = { this.userName } 
                            name="username" 
                            placeholder = "请输入用户名" 
                            input = { e => this.getUserName(e,'username')} 
                        />
                    </li>
                    <li>
                        <Input 
                            type="password" 
                            label="密码" 
                            placeholder = "请输入密码" 
                            input = { e => this.getUserName(e,'password')} 
                        />
                    </li>
                    <li style = {{marginTop:'20px'}}><Button value = "登录" onClick = { this.loginIn } className = "large" /></li>
                </ul>
            </section>
        )
    }
}
export default Login;