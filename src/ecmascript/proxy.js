let obj = {
    name:'proxy',
    age:30
}
const proxy = new Proxy(obj,{
    get:function(target, property,receiver){
        // console.log('get', target ); 
        // console.log('get', property );
        console.log( 'getaaa', receiver);
        return 'get'
    },
    set:function(target, property,receiver){
        console.log('set', target ); 
        console.log('set', property );
        console.log( 'set', receiver);
        return 'set'
    }
});
export default proxy;