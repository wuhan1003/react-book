import React, { Component } from 'react';
import LeftBar from '@component/leftbar';
class Article extends Component {
    render(){
        return (
            <section className = "page-article include-leftbar">
                <section className = "main">
                    <p>这是文章页面</p> 
                </section>
            </section>
        )
    }
}
export default Article;