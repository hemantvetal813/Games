// var canvas1 = document.querySelector('canvas');
// canvas1.width = window.innerWidth;
// canvas1.height = window.innerHeight;
// var c = canvas1.getContext('2d');

const offset = 10;
const border = 1;
const middleDist = 50;
const blockside = 70;
const columns = 8;
const rows = 8;
// const chess_obj = {};

// window.onload = function () {
//     game();
// };

// let drag = false;
// window.addEventListener(
//     'mousedown', () => {
//         drag = false
//     });

// window.addEventListener(
//     'mousemove', () => {
//         drag = true
//     });

// window.addEventListener(
//     'mouseup', () => {

//     });



const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }

});

function drawSquares () {
    ctx.fillStyle = "black";
    const bottomRightX = (columns * blockside) + border * 2;
    const bottomRightY = (rows * blockside) + border * 2;
    const topLeft = offset - border;
    const square1 = { x1: topLeft, y1: topLeft, x2: bottomRightX, y2: bottomRightY };
    const square2 = { x1: topLeft + bottomRightX + middleDist, y1: topLeft, x2: bottomRightX, y2: bottomRightY };
    ctx.fillRect(square1.x1, square1.y1, square1.x2, square1.y2);
    ctx.fillRect(square2.x1, square2.y1, square2.x2, square2.y2);
    ctx.fillStyle = "white";
    ctx.fillRect(square1.x1 + border, square1.y1 + border, square1.x2 - border * 2, square1.y2 - border * 2);
    ctx.fillRect(square2.x1 + border, square2.y1 + border, square2.x2 - border * 2, square2.y2 - border * 2);
}

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove',(e) => {
    // drawSquares ()
    ctx.fillText("Complete Welch labs imaginary numbers (paint part is complete)", 600, 250);
    draw(e)
});
