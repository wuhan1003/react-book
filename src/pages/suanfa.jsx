import React, { Component } from 'react';
function createArray(num){
    let arr = [],i=0;
    while(i < num ){
        arr.push(Number.parseInt(Math.random() * 50));
        i ++ ;
    }
    return [...new Set(arr)];
}
function CreateItem(props){
    const items = props.arr.filter(item => item > 0).map((item,key)=><li style = {{width:'10px', height:`${item}px`}} key = {key}></li>);
    return (
        <>
            { items }
        </>
    )
}
class Sf extends Component {
    constructor( props ){
        super( props );
        this.state = {
            arr:createArray(50)
        }
    }
    bubbleSort(){
        let arr = this.state.arr;
        for(let i = 0; i < arr.length -1 ; i++ ){
            for(let ii = 1; ii < arr.length; ii++ ){
                if( arr[i] > arr[ii]){
                    const max = arr[i];
                    arr[i] = arr[ii];
                    arr[ii] = max;
                    this.setState({arr});
                }
            }
        }
        console.log( arr )
    }
    componentDidMount(){
       this.bubbleSort();
    }
    render(){
        return (
            <section className = "component-sf">
                <h1>这是算法示例</h1>
                <ul>
                    <CreateItem arr = { this.state.arr} />
                </ul>
            </section>
        )
    }
}
export default Sf;