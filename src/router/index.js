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
import Article from '@page/article';
// import Nav from '@page/leftbar';
const pages = [
    {
        path:'/',
        auth:true,
        exact:true,
        component:Index,
        child:[
            {
                path:'/',
                exact:true,
                component:Chat,
            },
            {
                path:'/article',
                component:Article
            }
        ]
    },
    // {
    //     path:'/nav',
    //     component:Index,
    //     child:[
    //         {
    //             paht:'/nav',
    //             component:Chat,
    //         }
    //     ]
    // },
    {
        path:'/login',
        name:'login',
        exact:true,
        component:Login,
    },
    {
        path:'/sf',
        name:'sf',
        exact:true,
        component:Sf,
    }
]
const routes = pages.map((page,key) => (<PrivateRoute { ...page } key={ key } />) );

export default routes;