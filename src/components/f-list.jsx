import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class FList extends Component {
    // componentDidMount(){
    //     console.log( this.props.match.path )
    // }
    render(){
        return (
            <section className = "component-f-list">
                <dl>
                    <dt><input type="text" /></dt>
                    {
                        this.props.data.map((data,key)=>{
                            return (
                                <dd key = { key }>
                                    <NavLink to = {`${this.props.match.path}/${data.path}`} activeClassName = "currentRoute">{data.name}</NavLink>
                                </dd>
                            )
                        })
                    }
                </dl>
            </section>
        )
    }
}
export default FList