import React, { Component } from 'react';
import LeftBar from '@component/leftbar';
import { BrowserRouter as Router, Route,NavLink } from 'react-router-dom';
class Index extends Component {
    componentDidMount(){
        console.log( this.props.child );
    }
    render(){
        return (
            <Router>
                <section className="page-index">
                    <LeftBar { ...this.props } />
                    
                    {
                        this.props.child.map((route,key)=><Route {...route} key={key} />)
                    }
                </section>
            </Router>
        )
    }
}
export default Index;