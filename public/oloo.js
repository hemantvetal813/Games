const Stopwatch={
    init:function(me){
        this.me=me;
    },
    showName:function () {
        console.log(`My name is ${this.me}`)
    }
}

module.exports=Stopwatch