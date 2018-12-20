import React, { Component } from 'react';
import { Link} from 'react-router-dom';
class Index extends Component {
    constructor( props ){
        super( props );
        this.state = {
            
        }
    }
    componentDidMount(){
        console.log( this.props )
    }
    render(){
        return (
            <section className="page-index">
                <Link to = "/nav">去导航页</Link>
            </section>
        )
    }
}
export default Index;