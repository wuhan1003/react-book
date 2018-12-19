class Emitter {
    constructor(){
        this.listener = {}
    }
    on(name,fn){
        this.listener[name] = fn;
    }
    emit(name,...rest){
        console.log( rest );
        this.listener[name](...rest)
    }
}

export default Emitter;