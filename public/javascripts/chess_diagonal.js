var canvas1= document.querySelector('canvas');
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
var c=canvas1.getContext('2d');

const offset= 10;
const border= 1;
const blockside = 70;
const columns = 8;
const rows = 8;
const chess_obj = {};

window.onload=function() {
    game()
}

function game(){
    c.fillStyle="black";
    c.fillRect(offset-border,offset-border,(columns*blockside) +border*2,(rows*blockside) +border*2)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let x = (j*blockside) + offset;
            let y = (i* blockside) + offset;
            let id = i + (j* columns) + 1;
            chess_obj[id] ={
                x,y,
                colour:'black',
                'n':getTileId(x,y-blockside),
                'e':getTileId(x+blockside,y),
                'w':getTileId(x-blockside,y),
                's':getTileId(x,y+blockside),
                'ne':getTileId(x+blockside,y-blockside),
                'nw':getTileId(x-blockside,y-blockside),
                'se':getTileId(x+blockside,y+blockside),
                'sw':getTileId(x-blockside,y+blockside),
            };
            if((i%2 && j%2) || (i%2 == 0  && j%2 == 0)){
                c.fillStyle="white";
                chess_obj[id].colour = 'white'
                c.fillRect(x,y,blockside,blockside);
            }
            // c.fillStyle="red";
            // c.fillText(id ,x + (blockside/2),y + (blockside/2))
        }
    }
}

window.addEventListener('click',({x,y}) => {
        let clicked_id = getTileId(x,y);
        if(clicked_id){
            game();
            console.log(clicked_id, chess_obj[clicked_id]);
            highlightDiagonals(clicked_id);
        }
    }
)

function getTileId(x,y){
    let max_x = columns * blockside + offset;
    let max_y = rows * blockside + offset;
    if(x < max_x && y < max_y && x >= offset && y>=offset){
        return (Math.floor((x-offset)/blockside) * rows) + (Math.floor((y-offset)/blockside)) + 1
    }
    return null;
}

function highlightDiagonals(id){
    let obj = chess_obj[id];
    let markTiles=[id];
    ['ne','nw','sw','se'].forEach(key => {
        const element = obj[key];
        if(element){
            markTiles.push(element);
            getDiagonal(element,key,markTiles)
        }
    });
    console.log(markTiles);
    markTiles.forEach(tileId => {obj
        let {x,y,colour} = chess_obj[tileId];
        c.fillStyle=colour == 'black' ? "blue" : 'red';
        c.fillRect(x,y,blockside,blockside);
    })
}

function getDiagonal(element,dir,arr){
    const obj = chess_obj[element];
    if(obj[dir]){
        arr.push(obj[dir])
        getDiagonal(obj[dir],dir,arr)
    }
}