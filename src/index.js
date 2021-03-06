import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './router';
import './asset/style/common.css';
import './asset/style/pages.scss';
import './asset/font/iconfont.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <Router>
        <Switch>
            { routes }
        </Switch>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
