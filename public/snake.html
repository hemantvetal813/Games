var canvas1= document.querySelector('canvas');
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
var c=canvas1.getContext('2d');

// c.font = "30px Arial";
c.fillStyle="Red"
// c.fillRect(200,200,18,18);
// c.fillText("Hemant", 10, 50);

px=py=1;
gs=tc=24;
ax=10;
ay=11;
xv=yv=0;
trail=[];
tail = 2;
prev_key=null;

let dir_obj ={
    "L":37,
    "R":39,
    "U":38,
    "D":40,
}

function pressKey(dir){
    keyPush({keyCode:dir_obj[dir]})
}

window.onload=function() {
    // ! stop the snake from eating uncomment this line
    // document.addEventListener("keydown",keyPush);
    setInterval(checkGame,1000/15);
    // pressKey("R")
}
window.addEventListener('resize',function(){
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
})

let is_paused =false;
function checkGame(){
    !is_paused && game()
}

function game(){
    // if(prev_key)checkProbabilities();
    // else pressKey("R")
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    c.fillStyle="white";
    c.fillRect(0,0,innerWidth,innerHeight);
    c.fillStyle="black";
    c.fillRect(2,2,(gs*24)-2,(gs*24)-2)

    for(var i=0;i<trail.length;i++) {
        c.fillStyle="lime";
        c.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        c.fillStyle="black";
        c.font = "10px Arial";
        c.fillText(getBoxId(trail[i]),trail[i].x*gs + (1),(trail[i].y*gs)+(gs/2));
        // ! to place the dot between each snake part
        // c.fillStyle="black";
        // c.fillRect((trail[i].x*gs)+(gs/2),(trail[i].y*gs)+(gs/2),2,2);
        // ! to cut the snake if he/she steps over him/her self
        // if(trail[i].x==px && trail[i].y==py) {
        //     tail = 2;
        // }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
        trail.shift();
    }
    if(ax==px && ay==py) {
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    c.fillStyle="red";
    c.fillRect(ax*gs,ay*gs,gs-2,gs-2);
    c.font = "30px Arial";

    c.fillText(JSON.stringify(trail.length), 10, 50);
    checkProbabilities();
}

let head = {
    x :  0,
    y : 0
}
let apple = {
    x :  0,
    y : 0
}

function checkProbabilities(){
    head.x = (trail[trail.length-1].x*gs)+(gs/2)
    head.y = (trail[trail.length-1].y*gs)+(gs/2)
    apple.x = (ax*gs)+(gs/2)
    apple.y = (ay*gs)+(gs/2)
    // console.log(apple)
    // console.log(head)

    let dir_prob =[
        {dir:'L',key:37, x:head.x - gs, y:head.y},
        {dir:'R',key:39, x:head.x + gs, y:head.y},
        {dir:'U',key:38, x:head.x, y:head.y - gs},
        {dir:'D',key:40, x:head.x, y:head.y + gs},
    ]


    let distArray = dir_prob.map(d => calcDist(d))
    let minDist = Math.min(...distArray)
    let minIndex = distArray.indexOf(minDist);
    let selected_dir = dir_prob[minIndex];
    // console.log(minDist,distArray,minIndex)
    // if(selected_dir.key !== prev_key)console.log(selected_dir)
    // console.log(distArray)
    pressKey(selected_dir.dir)
}

function calcDist (obj) {
    return Number((Math.sqrt((obj.x - apple.x) ** 2 + (obj.y - apple.y) ** 2)).toFixed(3));
}

function getBoxId(obj){
    // console.log(obj.x,obj.y)
    let num = (gs * obj.x) + obj.y + 1;
    return String(num)
}

function keyPush(evt) {
    if(!prev_key) prev_key = evt.keyCode;
    switch(evt.keyCode) {
        case 32:
            is_paused = !is_paused
            break;
        case 37:
            if(prev_key !== 39){
                prev_key = evt.keyCode
                xv=-1;yv=0;
            }
            break;
        case 38:
            if(prev_key !== 40){
                prev_key = evt.keyCode
                xv=0;yv=-1;
            }
            break;
        case 39:
            if(prev_key !== 37){
                prev_key = evt.keyCode
                xv=1;yv=0;
            }
            break;
        case 40:
            if(prev_key !== 38){
                prev_key = evt.keyCode
                xv=0;yv=1;
            }
            break;
    }
}
