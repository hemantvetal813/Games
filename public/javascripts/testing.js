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

//get set
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
//console.log(person);

//async await e.g.

startTime = performance.now();  //Run at the beginning of the code
function executingAt() {
  return (performance.now() - startTime) / 1000;
}

async function fetchSingleUsersDetailsWithStats(name) {
    console.log("Starting API call for " + name + " at " + executingAt());
    userDetails = await fetch("https://github.com/" + name);
    userDetailsJSON = await userDetails.json();
    console.log("Finished API call for " + name + " at " + executingAt());
    return userDetailsJSON;
  }
 // console.log(fetchSingleUsersDetailsWithStats("hemantvetal813"));


//stopwatch

function Stopwatch() {
    let starttime,running,stoptime,duration,reset=0;

    this.start= function(){
        if(running)
        throw new Error('stopwatch already running');

        running=true;
        starttime= new Date();
        
    }
    this.stop= function(){
        if(!running)
        throw new Error('stopwatch already stopped');

        running=false;
        stoptime= new Date();

        const seconds= (stoptime.getTime()-starttime.getTime())/1000;
        duration=seconds;
    }
    this.reset=function(){
        duration=0;
        starttime=null;
        stoptime=null;
        running=false
    }
    Object.defineProperty(this,'duration',{
        get:function() {return duration}
    })
}

//check  https://www.youtube.com/watch?v=PFmuCDHHpwk 55:00
//define property and how to change value of location 

function Circle(){
    this.radius=10;
    let location={x:1,y:1};
    Object.defineProperty(this,'location',
      {get: function(){
        return location;
      },set: function(value){
        if(!x.value || !y.value)
            throw new Error('erroe')        
        location=value;
      }
    } )
}
const cad=new Circle();
cad.location.x=2;
cad['location']['y']=2;

