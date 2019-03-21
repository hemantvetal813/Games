var arr=[0,-1,2,3,1]

//filter
function scope(arr){
    return arr.filter(item=>item>0);
}

const qwerty=scope(arr);
//console.log(qwerty);

//filter and map chaining
var items=arr
            .filter(n=>{return n>=0})
            .map(item=> ({value:item}))
            .filter(obj=>obj.value>1)
            .map(item =>{return item})
//console.log(items);

var person={
    FN:"hemant",
    LN:"vetal",
    get fullname(){
        return `${person.FN} ${person.LN}`
    },
    set fullname(value){
        [this.FN,this.LN]=value.split(' ');
    }
};

person.fullname='Dinesh Vetal';
console.log(person);