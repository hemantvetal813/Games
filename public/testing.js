var express = require('express');
let router=express.Router()

// const set =  new Set(['welcome', 'to', 'GFG']); 
//             Array.from(set);

let initPuzz=[["W","R"],
              ["B","B"]]
              //how to reach here??
let FinalPuz=[["R","B"],
              ["B","W"]];

let seq=["L","U","L","U","R"]
router.get("/",(req,res) => {
    const result = getCheckSum(seq)
    // const result = multiples3(10)
    // const result = matMul(mat2,mat2)
    // const result = det(Matr)
    console.log(result)
    res.json(result)
});
let mat4= [[1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 1, 2, 3],
            [4, 5, 9, 7]];
let mat3= [[.1, .2,.7],
            [ .4, .3, .3],
            [ .1, .5, .4]];
let mat2= [[1, 2],
            [3, 4]];

function matMul(A,B){//A-->n x m ,B->m x p
    let n=A.length
    let m=B[0].length
    if(m!==A[0].length)return "mul not possible;no of columns of matA == no of rows of matB"
    let p=B[0].length
    let C=A.map(ele=> new Array(p));// n x p
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < p; j++) {
            let sum=0;
            for (let k = 0; k < m; k++) {
                sum=sum+A[i][k]*B[k][j]
            }
            C[i][j]=sum
        }   
    }
    return C
}
function multiples2(limit,array)
{
    let count=0;
    let countArray=[]
    for(let index of array)
    {
        let dfg=Math.floor(limit/index);
        let jkl=index*dfg;
    //    count+=jkl;
    countArray.push(jkl);
       
        for(dfg>0;dfg--;){
            countArray.push(dfg*index);
        }
    }
    let countSet=new Set(countArray);
    countArray=Array.from(countSet)
    count=countArray.reduce((curr,acc)=>acc+=curr,0)
    return count;
}
function multiples3(limit)
{
    let count=0;
    let addArray=[3,2,1,3,1,2,3]
  let j=-1
    for(let i=0;i<limit;i+=addArray[j]){
        if(i%3==0||i%5==0) count+=i
        j+=1;
        if(j>=addArray.length)j=0
    }
    return count;
}

function getCheckSum(array){
    checksum=0
    // checksum=(checksum*243+76)%(10**9+7)
    letterCode={"L":76,"R":82,"U":85,"D":68}
    seq.forEach(each=>{
        value=seq.find(turn=>turn==each)
        checksum=(checksum*243+letterCode[value])%(10**8+7)
    })
    return checksum
}




module.exports=router