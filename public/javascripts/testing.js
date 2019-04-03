

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
//DUE TO SET I CAN CHANGE PERSON.NAME
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

//FIZZBUZZ ALGORITHM
function fizzbuzz(number){
    //bad line
    if(number==null || typeof number =="boolean" || typeof number=="string") return "NAN";
    //good line
    if(typeof number !== "number") return "NAN";
    if(number%3==0 && number%5==0) return "Fizzbuzz";
    if(number%3==0) return "Fizz";
    if(number%5==0) return "buzz";

    else return number;
}
// console.table(fizzbuzz(3));
// console.table(fizzbuzz(5));
// console.table(fizzbuzz(15));
// console.table(fizzbuzz(8));
// console.table(fizzbuzz("gug"));

//SPEED LIMIT PROBLEM
function speedlimit(speed){
    if(typeof speed!== "number" || speed<0) {
        return "Enter Valid speed"
    }
    if(speed>(74)){
    speednumber=speed-70;
    let number= Math.floor(speednumber/5);
    if(number<12){
    return `Point: ${number}`
    } else{return "license suspended"}
    }
    else return "ok";
}
// console.log(speedlimit(75));
// console.log(speedlimit(180));
// console.log(speedlimit(-80));
// console.log(speedlimit(134));


function showNumbers(number) {
    if(typeof number!== "number" || number<0) {
        return "Enter Valid number"
    }
    for(i=0;i<=number;i++){
        if(i %2 ===0) {
             console.log(`${i} Even`)
        }
        if(i %2 !==0) {
             console.log(`${i} Odd`)
        }
    }
}
//console.log(showNumbers(13));


//count truthy values
function counttruthy(array){
    // filter doesnt change the main array.
    
    let arr1=array.filter(item =>{
        if(item){return item}
    })
    return arr1
}
let asd=[1,2,0,'',5,0,3,4]
//console.log(counttruthy(asd).length);

// prop of object

function showprop(ZXC){
    let acd=Object.values(ZXC)
    for(let index of acd){
        console.log(index);
    }
}

let ghj={a:1,b:2,c:3,d:4}
// console.log(showprop(ghj));

//multiles of 3 & 5 showing the as string

function multiples(limit,array){
    let outputarr=[];
    for(let index of array){
        outputarr.push(Math.floor(limit/index));
    }

    return outputarr.join('');
}
// console.log(multiples(10,[3,5]));

//gives addition of numbers check console.log
function multiples2(limit,array)
{
    let count=0;
    for(let index of array)
    {
        let dfg=Math.floor(limit/index);
        let jkl=index*dfg;
       count+=jkl;
       
        for(dfg>0;dfg--;){
            count+=dfg*index;
        }
    }
    return count;
}
// console.log(multiples2(10,[4,5,3,2]));


function grades(item)
{
    let count=0;
  item.forEach(element => {
        count+=element;
        
    });
    let grade;
    let avg=count/item.length;
    if(avg<=59) grade="F";
    if(avg>59) grade="A";
    return grade;
}
let student=[80,80,80,80]
// console.log(grades(student));

//stars
function stars(item)
{
    
    for(let i=1;i<=item;i++){
        let pattern='';
        for(j=0;j<i;j++)
        pattern+="*";
        console.log(pattern);
    
    }
    
}

//stars(10);


