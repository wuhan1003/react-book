import React, { Component } from 'react';
import proxy from '../ecmascript/proxy';
import Emitter from '../ecmascript/emmitter';
class Es extends Component { 
    componentDidMount(){
        const n = new Emitter();
        n.on('test',function(...rest){
            console.log(rest[0])
            console.log('aaaaaaa')
        });
        n.emit('test',['aaa','bbbb'],'cccc');
    }
    render(){
        return(
            <section>
                <p>这是JavaScript</p>
            </section>
        )
    }
}
export default Es;