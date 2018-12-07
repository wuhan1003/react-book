import React, { Component } from 'react';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <section className = "page-login">
                <ul>
                    <li><label>用户名：</label><input type="text" /></li>
                    <li><label>用户名：</label><input type="text" /></li>
                    <li><button>提交</button></li>
                </ul>
            </section>
        )
    }
}
export default Login;