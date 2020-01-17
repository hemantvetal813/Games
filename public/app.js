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

let scanDir = path.join(__dirname, "public1")
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