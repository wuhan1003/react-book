import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from '@component/privateroute';
// const Index = () => import(
//     /*webpackChunkName:'page-index' */
//     /*webpackMode:'lazy'*/
//     '@page/index'
// );
import Index from '@page/index';
import Login from '@page/login';
import Sf from '@page/suanfa';
import Chat from '@page/chat';
import Nav from '@page/leftbar';
const pages = [
    {
        path:'/',
        auth:true,
        exact:true,
        component:Index
    },{
        path:'/login',
        name:'login',
        exact:true,
        component:Login,
    },{
        path:'/sf',
        name:'sf',
        exact:true,
        component:Sf,
    },{
        path:'/nav',
        component:Nav
    },{
        path:'/nav/chat',
        name:'chat',
        component:Chat
    }
    
]
const routes = pages.map((page,key) => (<PrivateRoute { ...page } key={ key } />) );

export default routes;