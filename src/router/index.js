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
import Es from '@page/es6';
import ChatDetail from '@page/chat-detail';
import Nav from '@page/nav';
const Nofound = props =>(
    <section>
        <p>404</p>
    </section>
)
// import Nav from '@page/leftbar';
const pages = [
    {
        path:'/',
        auth:true,
        exact:true,
        component:Index,
        // child:[
        //     {
        //         path:'/nav',
        //         component:Chat,
        //     },
        // ]
    },
    {
        path:'/nav',
        auth:true,
        component:Nav,
        routes:[
            {
                path:'/nav',
                exact:true,
                component:Article,
            },
            {
                path:'/nav/article',
                exact:true,
                component:Article
            },
            {
                path:'/nav/chat',
                component:Chat,
                routes:[
                    {
                        path:'/nav/chat/:name',
                        exact:true,
                        component:ChatDetail
                    }
                ]
            },
            
            // {
            //     path:'/nav/chat/:name',
            //     exact:true,
            //     component:ChatDetail
            // }
            // {
            //     path:'/nav/:name',
            //     exact:true,
            //     component:ChatDetail
            // }
            
        ]
    },
    
    // {
    //     path:'/article',
    //     auth:true,
    //     exact:true,
    //     component:Article
    // },
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
    },
    {
        path:'/es',
        exact:true,
        component:Es
    },
    // {
    //     path:'/:name',
    //     auth:true,
    //     exact:true,
    //     component:ChatDetail, 
    // },
    {
        component:Nofound
    }
]
const routes = pages.map((page,key) => (<PrivateRoute { ...page } key={ key } />) );

export default routes;