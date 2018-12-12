import React, { Component } from 'react';
// import LeftBar from '@component/leftbar';
class Index extends Component {
    componentDidMount(){
        console.log( this.props.match.url );
    }
    render(){
        return (
            <section className="page-index">
                
            </section>
        )
    }
}
export default Index;