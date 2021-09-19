// const _=require('../../node_modules/lodash');
// const os = require('os');

// var _ = require("lodash");

// var _= document.querySelector('');
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

// Using the get operator
var o = { get gimmeFive() { return 5; } };
//console.log(o.gimmeFive); // 5

// Using Object.defineProperty
var o = {};
Object.defineProperty(o, 'gimmeFive', {
  get: function() {
    return 5;
  }
});
// console.log(o.gimmeFive); // 5

//async await e.g.

// startTime = performance.now();  //Run at the beginning of the code
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

function Stopwatch1() {
    let starttime,running,stoptime,duration,reset=0;

    Object.defineProperty(this,'duration',{
        get:function() {return duration}
    })
}
Stopwatch1.prototype.start=function(){
    if(this.running)
        throw new Error('stopwatch already running');

        this.running=true;
        this.starttime= new Date();
}
Stopwatch1.prototype.reset=function(){
    this.duration=0;
    this.starttime=null;
    this.stoptime=null;
    this.running=false
}
Stopwatch1.prototype.stop=function(){
    if(!this.running)
        throw new Error('stopwatch already stopped');

        this.running=false;
        this.stoptime= new Date();

        const seconds= (this.stoptime.getTime()-this.starttime.getTime())/1000;
        this.duration=seconds;//here we cant set new value to duration as it is only getter.
        //the soln is to add a setter in duration defineproperty
        //but this creates a problem that we can again define that value so
        //creating a prototype property for memory optimization is a bad idea.
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
            throw new Error('error');
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

//simple soln for multiples2 of 10,[3,5]
function multiples3(limit)
{
    let count=0;
    //faster increementation but not generic soln
    let addArray=[3,2,1,3,1,2,3]
  let j=-1
    for(let i=0;i<limit;i+=addArray[j]){
        if(i%3==0||i%5==0) count+=i
        j+=1;
        if(j>=addArray.length)j=0
    }

    return count;
}

function grades(...item)//IT PUTS ALL ARGUMENTS IN ARRAY AND IF IT IS AN ARRAY IT PUTS IT IN A ARRAY
{

    if(Array.isArray(item) && item.length===1){

        item=[...item[0]];
    }

    let count= item.reduce((a,b) => a+b);

    let grade;
    let avg=count/item.length;
    if(avg<=59) grade="F";
    if(avg>59) grade="A";
    return grade;
}
let student=[80,80,80,80]
// console.log(grades(80,80,80,80));

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

function prime(limit){

    for (let i=2;i<=limit;i++){
        let op=true;
        for(let j=2;j<i;j++){
            if(i % j===0) {
                op=false;
                break;
            }
        }
            if(op){
            console.log(i)};
    }
}
// prime(200)


//apply call methods
function circle(rad,vad){
    return{
        rad:rad,
        vad:vad
    }
}

const varri=circle.apply({},[1,2]);

// console.log(varri);
const varri1=circle.call({},1,2);


//factory function
function address(street,city,pincode) {
    return{
        street,
        city,
        pincode
    }
};

let add1= address('kopar','dombivli','421202');

//constructor function
function Address1(street,city,pincode) {

        this.street=street,
        this.city=city,
        this.pincode=pincode
    }
;

let add2= new Address1('kopar','dombivli','421202');

//how to use includes,splice for object, array, strings

const courses=[
    {id:1,name:"hemant"},
    {id:2,name:"vetal"}
]

// console.log(Object.values(ghj).includes(1)); //or
var kll=courses.find(function (element){
    return element.name==="hemant" ;
});
// console.log(kll);
let extra="Bhagwan";
let extra1=[1,2,3,4,1];
// console.log(extra.includes("Bhagwan"));
// console.log(extra1.includes(3));

// console.log(extra1.splice(1,0,"A","a"));
// console.log(extra1)

var message="My name is hemant vetal";//this is done to make url
var combined=message.split(" ")//convert string to array
                    .join("-");//convert array to string

// console.log(combined);


// making of an array with two numbers

// if else executes both if's so solution is case switch
function makearray(min=0,max=0) {
    let arr=[];
    if(min<=max){
    for(min;min<=max;min++) {
        arr.push(min);
    }
    }
    if(min>max){
        for(max;min>=max;max++) {
            arr.push(max);
        }
    }
    return arr;
}

function makearray1(min=0,max=0) {
    let arr=[];
    let role;
    if(min<=max){role="min"}
    else{role="max"};
    switch (role){
        case "min":
    for(min;min<=max;min++) {
        arr.push(min);

    }
    break;
    case "max":
        for(max;min>=max;max++) {
            arr.push(max);
        }
    break;
    }
    return arr;
}
// console.log(makearray(-9,0));
// console.log(makearray1(-9,0));

//finds if element is in array like includes in built string object prop
function includes1(array,search) {
   for(let element of array)
   if(element === search)
           return true;
       }

// console.log(includes1(extra1,1));

//except deletes numbers from array

function except(array1,array2) {
    let arr1=[];
    let foo;
    for( let element2 of array1) {
        foo=true;
        for(let element1 of array2 ) {
            if(element1=== element2){
            foo=false;
            break;}
        }
        if(foo==true)
        {arr1.push(element2);}
    }
    return arr1;
}

//shorter and cleaner
function except2(array1,array2) {
    const op=[];
    for(let element of array1)
    if(!array2.includes(element))
    op.push(element);
    return op;
}

// console.log(except2(extra1,[1,2]));

//move array items
function arraymove(array,index,offset) {
    let arr22=[...array];//cloning so original remians the same
    //validation
    if(index+offset >=arr22.length || index+offset <0){
        return console.error("wrong")
    }
    //saving output in other array to use again so we cant use chaining
let arr3=arr22.splice(index,1);
arr22.splice((index+offset),0,arr3[0]);
return arr22;
}

let fghj=[1,2,3,4,5,4,4];
// console.log(arraymove(fghj,4,-4))

//count occurences

function countoccurences(array,item) {
    //cloning to avoid changing the main array

    //normal
    if(!Array.isArray(array))
    throw new Error(' Enter a array')


    try{
        arr33=[...array];
    let count=0;
    for(let i of array) {
        let j=(i===item)?1:0;
         count+=j;
    }
    return count;
    }
    catch(e){
        console.log(e);
    }
    //reduce method
    // let goodone=arr33.reduce((accumulator,current)=>{

    //     if(current==item) accumulator++
    //     return accumulator;
    // },0)
    // return goodone;

    //filter method
    // let goodone=arr33.filter(element =>{
    //     if(element==item) return item
    // })
    // return goodone.length;
}

// console.log(countoccurences(fghj,4))

//movies sorting

let movies=[
    {title:"a",year:2018,rating:4.7},
    {title:"b",year:2018,rating:4.5},
    {title:"c",year:2018,rating:3},
    {title:"d",year:2017,rating:4.5},
    {title:"e",year:2018,rating:4.8},
];

let yearfilter=2018;
let ratingfilter=4.5;

function moviesorter(obj,item,index) {
   return obj.sort(function(a, b){return b.year-a.year|| b.rating -a.rating})
             .filter(function(n){return n.year===item && n.rating>=index})
             .map(m => m.title);

}
// console.log(moviesorter(movies,yearfilter,ratingfilter));


//test: prototypical Inheritance

function Htmlelement(){
    this.click=function(){
        console.log('click');
    }
    this.render=function(){
        console.log('hemant b vetal');
    }
};
Htmlelement.prototype.focus=function(){
    console.log('focus');
}

function Selecthtmlelement(array=[],click) {
    Htmlelement.call(this,click);
    this.array=array;
    this.additem=function (item) {
        this.array.push(item);
    }
    this.removeitem= function(item){
        this.array.splice(this.array.indexOf(item),1);
    }

}


Selecthtmlelement.prototype=Object.create(Htmlelement.prototype);//for copying prototype prop.
Selecthtmlelement.prototype=new Htmlelement();//for copying prototype & instance prop.and advantage is you can remove call method in function

Selecthtmlelement.prototype.constructor=Selecthtmlelement;


let h= new Htmlelement;
let s= new Selecthtmlelement;

function Imghtmlelement(src) {

    this.render=function() {
        console.log(this.src);
       }
Object.defineProperty(this,"src",{
    get: function(){
        return src;
      }
    //   ,set: function(value){
    //     src=value;
    //   }
})
}
Imghtmlelement.prototype=new Htmlelement();
Imghtmlelement.prototype.constructor=Imghtmlelement;



let d=new Imghtmlelement("dinesh b vetal");


//class STACK getters & setters in classes ES6

const _items= new WeakMap();

class Stack {
    constructor() {//define variables in constructor
        _items.set(this,[]);
    }

    push(obj) {
        const items=_items.get(this);

        items.push(obj);
    }

    pop() {
        const items=_items.get(this);

        if(items.length===0) throw new Error('Stack empty');
        items.pop();
    }

    peek() {
        const items=_items.get(this);

        if(items.length===0) throw new Error('Stack empty');

        return items[items.length-1];//to see the last element added
    }

    get count() {
        const items=_items.get(this);
        return items.length;
    }

}

const he=new Stack;

//same with function

function Stackfn() {
     let array=[];
    this.push= (obj) => {
         this.array.push(obj);
     }

     this.pop= ()=> {
        if(this.array.length===0) throw new Error('Stack empty');
         this.array.pop();
     }

     this.peek= () => {
        if(this.array.length===0) throw new Error('Stack empty');
         return this.array[this.array.length-1];
     }

     Object.defineProperty(this,"array",{
         get:function(){
             return array;
         },

     })
     this.count=() => {
         return this.array.length;
     }
}

let ge= new Stackfn;

function factorial(foo) {
    var bar= foo;
    while(bar>2) {
        foo=foo*(bar-1);
        bar--;
    }
    return foo;
}

//cricket world  cup schedule
const teams="  Ind Aus Ban Pak SL NZ WI RSA Afg Eng  "
// const teams="  Ind Aus Ban Pak RSA "
const teamArray=teams.trim().split(" ");



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  //array of two unique numbers
 function createTwoNos(min, max) {
    let number1= getRandomInt(min, max),number2;
    let twoNos= [];
    twoNos.push(number1);
    for( number2;number2!=number1;){
        number2=getRandomInt(min, max);
        if(number1!==number2){
             twoNos.push(number2);
                return twoNos;
        }
        else{number2=number1-1} //something is getting undefined here so I repeat that iteration which gets failed
    }
}


let matcharray=[];
    for (let i = 0; i < teamArray.length; i++) {
        let team1=teamArray[i];
            for(let j=0;j<i;j++)
            {
                let team2=teamArray[j];
                matcharray.push(team1,team2);
            }
        }



// console.log(matcharray);

function pythaTriplet() {
    let pytha = document.getElementById("pytha").value;
    let pythagorean=[];
    for(let i=pytha/2;i>0;i--) {
        for(let j=1;j<(pytha-1-i);j++) {
                let k=(pytha-i-j);
                // console.log([i,j,k]);
                    if( i**2 === j**2 +k**2) {
                        pythagorean=[i,j,k];
                        break;
                    }
                    else continue;
        }
        if(pythagorean[0]) break;
}
if(pythagorean[0]) pythaOutput.innerHTML=pythagorean;
else pythaOutput.innerHTML="number is not a pythagorean triplet";
}


//tocheck unique values in array input
function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}



//there should be nine arrays WITH LENGTH 9
// if(sudoku.forEach((element) => element.length!==9) ) console.log("input not valid");

function SudokuChecker(sudoku) {
    let sudokueachArray=true;
    for(value of sudoku) {
        if(value.length!==9){
            sudokueachArray=false;
        }
    }
    if(sudoku.length!==9 || sudoku.forEach((item) => Array.isArray(item)) || !sudokueachArray)console.log("input not valid");
    let newsudoku=[[],[],[],[],[],[],[],[],[]];//...sudoku
    let check= true;
    sudoku.forEach((item) => {
        if(hasDuplicates(item)) {
            check=false;
            // break;
        }//return console.log("Not a Sudoku");
        item.forEach((element) => {
            if(typeof element !== "number") {
                return console.log("input not valid") ;
               }
        });

    });
    if(check==false) return console.log("Not a Sudoku");
    for(let i=0;i<9;i++) {
        let tempsudoku=sudoku[i];
        for(let j=0;j<9;j++) {
            newsudoku[j].push(tempsudoku[j]);
        }
    }
    let result1 = newsudoku.forEach((item) => {
        if(hasDuplicates(item)) {
            check=false;
        }

    });
    if(check==false) return console.log("Not a Sudoku");
    else return console.log("Sudoku");
}

let checkMySudoku=[
    [1,2,3,4,6,6,7,8,9],
    [4,5,6,7,8,9,1,2,3],
    [7,8,9,1,2,3,4,5,6],
    [2,3,4,5,6,7,8,9,1],
    [5,6,7,8,9,1,2,3,4],
    [8,9,1,2,3,4,5,6,7],
    [3,4,5,6,7,8,9,1,2],
    [6,7,8,9,1,2,3,4,5],
    [9,1,2,3,4,5,6,7,8]
];

// SudokuChecker(checkMySudoku);

function pythagoreanTriple (num) {
    let num2=num;
    while (true) {
        num2++;
        let num3=Math.sqrt(num2**2 + num**2)
        if(num3 % 1 ==0){
            return [num,num2,num3]
        }
    }
}
// console.log(pythagoreanTriple(5));
function climbingLeaderboard(scores, alice) {
    let output=[];
    for (let i = 0; i < alice.length; i++) {
        const score = alice[i];
        let sortedArray=[...scores,score].sort((a,b)=>b-a);
        let uniqueArray=[...new Set(sortedArray)];
        let scoreIndex= uniqueArray.indexOf(score);
        output.push(scoreIndex + 1)

    }
    return output
}
// console.log(climbingLeaderboard([100,90,90,80,75,60],[50,65,77,90,102]));

function isValidString(s) {
    let output=[]
    let output1=[]
    let output2=[]
    let alphabets=s.split("");
    let uniqueElements=[...new Set(alphabets)];
    for (let i = 0; i < uniqueElements.length; i++) {
        const alpha = uniqueElements[i];
        let count= alphabets.filter(item => item == alpha).length;
        output1.push(count)
        if(!output2.includes(count)) {
            output2.push(count)
            if(output2.length >3) return "NO"
        }
    }
    console.log(output2);
    if(output2.length ==1) return "YES";

    // if(Math.abs(output2[1]-output2[0]) !=1 ) return "NO";
    let maxValue=Math.max(...output2);
    let minValue=Math.min(...output2);

    if(output2.length ==2){
        if(minValue==1 && output1.filter(item => item == minValue).length==1) return "YES";
        if(output1.filter(item => item == maxValue).length>1) return "NO"
        else return "YES"
    }

    return minValue==1 ?  "YES" :  "NO"


}
//  console.log(isValidString('aaaabbcc'))

//creates array [1,2,3,4,5]
// Array.from({length: 5}, (v, i) => i+1);

const getFixedCounters = function counter(k) {
  let value = 0;
  return {
    getVal: function() {
      return value;
    },
    incre: ()=> {
      value += k;
    },
    decre: ()=> {
      value -= k;
    },
  }
};
