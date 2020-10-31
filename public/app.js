var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var morgan = require('morgan');
const fs = require('fs');
const testing = require('./testing');

// (new Date()).toISOString().replace(new RegExp(":","g"),"_")



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('morgan')('short'));
app.use("/test",testing)


//mergeSort
//it splits the array in single element array and sorts like this tree diagram
//   *(length=6)
// ******
//  ***
//  **
//  *
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let rLen = arr.length
    let res= []   
    for(let i=0;i<rLen;i+=2){
        if(arr[i] && arr[i+1]){
            if(typeof arr[i] == "number") arr[i] = [arr[i]]
            if(typeof arr[i+1] == "number") arr[i+1] = [arr[i+1]]
            let op= merge(arr[i],arr[i+1])
            res.push(op)
        }else{
            res.push(arr[i])
        }
    }
    return mergeSort(res)
}

// mergeSort([52,32,2,324,45,1,2,3,4])
mergeSort(createArray(500,1000))

//this function takes only two sorted arrays.
// it returns concatenated single sorted array
function merge(arr1,arr2) {
    let result =[];
    let len1 =arr1.length
    let len2 =arr2.length
    let j = 0
    let i = 0
    while(i < len1 || j < len2){
        if(arr1[i] && arr2[j]){
            if(arr1[i] < arr2[j]){
                result.push(arr1[i])
                i+=1
            } else{
                result.push(arr2[j])
                j+=1
            }
        }else{
           if(arr1[i]){
                result.push(arr1[i])
                i+=1
           } 
           if(arr2[j]){
                result.push(arr2[j])
                j+=1
           } 

        }
        
    }
    return result
}

// merge(  [25,100,200,500,600,700],[30,35,40,45,46,47] )

function createArray(no_of_values,scale=10){
    return new Array(no_of_values).fill(null).map(i=>Math.round(Math.random()*scale))
}

//BINary search tree creation
function Node(value){
    this.value=value;
    this.left=null;
    this.right=null;
}

function BST(){
    this.root=null;
    return this
}

function getBST(arr,tree= new BST()){
    if(!arr.length)return tree
    arr.forEach(el => {
        if(!tree.root) tree.root = new Node(el)
        else{
            let value= tree.root.value
            let key = el <= value ? 'left' : 'right';
            createNodes(tree.root,el,key)
        } 
    })
    return tree
}

function createNodes(node,el,direct){
    if(!node[direct]) node[direct] = new Node(el)
    else{
     let value= node[direct].value
     let key = el <= value ? 'left' : 'right';
     createNodes(node[direct],el,key)  
    }

}
// let newTree = getBST(createArray(10,100))
// console.log(newTree)
// getBST([50],newTree)
//BINary search tree creation

//binary tree search function
function findNode(search,tree=new BST()){
    if(!tree.root || !tree.root.value) return false;
    let rootValue= tree.root.value
    if(rootValue == search) return true
    else{
        let key = search < rootValue ? 'left' : 'right';
        if(!tree.root[key]) return false
        else return checkNode(search,tree.root[key])
    }

}


function checkNode(search,node){
    if(node.value == search) return newTree
    else{
        let key = search < node.value ? 'left' : 'right';
        if(!node[key]) return false
        else return checkNode(search,node[key])   
    }
}

// findNode(10,newTree)
// console.log(newTree)

//breadth first search
function BFS(tree=new BST()){
    if(!tree.root || !tree.root.value) return [];
    let queue = [tree.root];
    let traversed = []
    for(let i=0;;i++){
        let node=queue[i];
        if(!node) break;
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
        traversed.push(node.value)
    }
    console.log(tree)
    return traversed
}

// BFS(newTree)

function DFS(tree=new BST()){
    if(!tree.root || !tree.root.value) return [];
    let traversed = []
    function traverse(node){
            traversed.push(node.value) //preorder
        if(node.left) traverse(node.left)
//         traversed.push(node.value)// in order
        if(node.right) traverse(node.right)
//         traversed.push(node.value)// post order
    }
    traverse(tree.root)
    console.log(tree)
    return traversed
}

// DFS(newTree)

//it sorts forward, while inserting upcoming element in required position behind it 
function insertionSort(arr) {
    console.log(arr)
    for(let i=1;i<=arr.length;i++){
        let lowest = i;
        for(let j=i-1;j>=0;j--){
            if(arr[lowest]>arr[j]){
                let temp =arr[j];
                arr[j] = arr[lowest];
                arr[lowest]=temp
            }
            lowest -=1
        }
    }
    return arr
}

insertionSort([5,1,2,3,4,32,2,324,45,1,2,3,68,32,12,3])



var Matr = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];
var Matr5 = [[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14, 15],
[16, 17, 18, 19, 20],
[21, 22, 23, 24, 25]];
app.use('/solve', (req, res) => {
  // const result = solve([[1,2,3],[4,5,6],[7,8,9]])
  // const result = deleteOuterEleArray([[1,2,3],[4,5,6],[7,8,9]])
  // const result = deleteOuterEleArray(Matr)
  const result = solve(Matr)
  // const result = det(Matr)
  console.log(result)
  res.json(result)
});

let scanDir = path.join(__dirname, "public")
app.use('/files', async (req, res) => {

  const files = await getAllFiles(scanDir)
  res.send(files)
});

function getAllFiles(dir) {
  let insideFiles = []
  let returnFiles = []
  let prevDir = ""
  function getFiles(dir) {
    let folderFiles = []
    prevDir = path.join(dir, "../");
    let files = fs.readdirSync(dir)
    for (let file of files) {
      if (path.extname(file) == "") {
        let directory = path.join(dir, file)
        getFiles(directory);
      }
      else {
        folderFiles.push(file);
        if (files[files.length - 1] == file) dir = prevDir
      }
    }
    insideFiles = insideFiles.concat(folderFiles)
    return insideFiles
  }
  returnFiles = returnFiles.concat(getFiles(dir))
  return returnFiles
}

var Mat = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 1, 2, 3],
[4, 5, 9, 7]];

function det(M) {
  if (M.length == 2) { return (M[0][0] * M[1][1]) - (M[0][1] * M[1][0]); }
  var answer = 0;
  for (var i = 0; i < M.length; i++) {
    answer += Math.pow(-1, i) * M[0][i] * det(deleteRowAndColumn(M, i));
  }
  return answer;
}

function deleteRowAndColumn(M, index) {
  var temp = [];
  for (var i = 0; i < M.length; i++) { temp.push(M[i].slice(0)); }
  temp.splice(0, 1);
  for (var i = 0; i < temp.length; i++) { temp[i].splice(index, 1); }
  return temp;
}
function deleteOuterEleArray(M) {
  var temp = [];
  let lastindex = M.length - 1
  for (var i = 0; i < M.length; i++) { temp.push(M[i].slice(0)); }
  temp.splice(lastindex, 1);
  temp.splice(0, 1);
  for (var i = 0; i < temp.length; i++) { temp[i].splice(lastindex, 1); temp[i].splice(0, 1) }
  return temp;
}
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { err: err });
});

function solve(equations) {

  let matNo = equations.length

  let result = []
  let prevMat = []
  let newMat = []
//if matrix is empty after slicing it then returning
  if (getOuterEleArray(equations).length == 0) return result;

  result = result.concat(getOuterEleArray(equations));

  prevMat = equations

  for (let i = 2; i < matNo; i++) {
    newMat = deleteOuterEleArray(prevMat);
    result = result.concat(getOuterEleArray(newMat))
    prevMat = newMat
  }

  return result
}

function getOuterEleArray(equations) {
  let i = 0;
  let j = 0;
  let resultArray = []
  let matNo = equations.length

  while (j < matNo) {
    resultArray.push(equations[i][j])
    j++
  }
  j -= 1; i += 1
  while (i < matNo) {
    resultArray.push(equations[i][j])
    i++
  }
  i -= 1; j -= 1
  while (j >= 0) {
    resultArray.push(equations[i][j])
    j--
  }
  j += 1; i -= 1
  while (i > 0) {
    resultArray.push(equations[i][j])
    i--
  }
  return resultArray
}
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
module.exports = app;
