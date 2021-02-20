
var canvas1= document.querySelector('canvas');
;
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
var c=canvas1.getContext('2d');

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
// c.fillStyle="blue"
// c.fillRect(200,200,200,200);
// c.beginPath();
// c.moveTo(200,200);
// c.lineTo(200,400);
// c.lineTo(400,400);
// c.lineTo(400,200);
// c.lineTo(200,200);
// c.stroke();
// for(var i=1;i<1000;i++){
//     x=Math.random() * window.innerWidth;
//     y=Math.random() * window.innerHeight;
//     b=Math.random() * window.innerHeight;
//     a=Math.random() * window.innerWidth;
//     c.fillStyle=getRndColor();
//     c.fillRect(x,y,a,b);
// c.beginPath();
// c.moveTo(x,y);
// c.lineTo(x,y+b);
// c.lineTo(x+a,y+b);
// c.lineTo(x+a,y);
// c.lineTo(x,y);
// c.stroke();
// c.strokeStyle=getRndColor();
// c.arc(x,y,10,0,Math.PI*2,false);
// c.stroke(); }

const no_of_planets = 500;
var maxradius=50;
var minradius=2;
var vicinity=40;
var max_speed = 3;

var balls_touched = [];
var prev_x=0,prev_y=0;
var is_mouse_moving=false;
// canvas.style.background = red;
function Circle(id,x,y,dx,dy,radius){
    this.id=id;
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.colour=getRndColor();
    c.globalAlpha=1;//0~1


    this.draw = function(){
            c.beginPath();
            // c.fillStyle=getRndColor();
            c.fillStyle=this.colour;
            c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
            c.stroke();
            c.fill();

    }

    this.update= function(i){
        if(this.x+this.radius>innerWidth || this.x-this.radius<0){
            this.dx=-this.dx;
        }
        if(this.y+this.radius>innerHeight || this.y-this.radius<0){
            this.dy=-this.dy;
        }

        this.x+=this.dx;
        this.y+=this.dy;

        if(is_mouse_moving && mouse.x-this.x<100 && mouse.x-this.x>-100 && mouse.y-this.y< vicinity && mouse.y-this.y>-vicinity){
            if(!balls_touched.includes(this.id)){
                //  !comment this line for stop removing circles
                CircleArray.splice(i,1)
                balls_touched.push(this.id)
            }
            if(this.radius<maxradius){
                this.radius+=3;
            }
        }
        else if(this.radius>minradius){
            this.radius-=1;
        }

        this.draw();
        // c.fillStyle=getRndColor();
    }

}

// var circle1 = new Circle(200,200,4,4,30);
var CircleArray=[];
function init(){
    // CircleArray=[];
    for (let i = 0; i < no_of_planets; i++) {

        var radius= Math.random()*10+3;
        var x=Math.random()*(innerWidth-2*radius) +radius;
        var y=Math.random()*(innerHeight-2*radius) + radius,
        dx=(Math.random()-0.5)*max_speed,
        dy=(Math.random()-.5)*max_speed;

        CircleArray.push(new Circle(i+1,x,y,dx,dy,radius));
    }
}

var mouse= {
    x: undefined,
    y: undefined,
}

window.addEventListener('mousemove',
    function(event){
        mouse.x= event.x;
        mouse.y= event.y;
    }
)

window.addEventListener('resize',function(){
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
})

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
        get:function() {
            if(!running) return duration;
            return (new Date().getTime()-starttime.getTime())/1000;
        }
    })
}


function animate(){

    requestAnimationFrame(animate);
    c.clearRect(00,00,innerWidth,innerHeight);

    // c.beginPath();
    // c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    // c.strokeStyle=getRndColor();
    // c.stroke();

    // if(this.x+this.radius>innerWidth || x-this.radius<0){
    //     this.dx=-this.dx;
    // }
    // if(this.y+this.radius>innerHeight || this.y-this.radius<0){
    //     this.dy=-this.dy;
    // }
    // console.log(mouse);
    // this.x+=this.dx;
    // this.y+=this.dy;
    // console.log(mouse.x,mouse.y);

    // console.log(prev_x,prev_y);
    if(prev_y && prev_x && prev_x == mouse.x && prev_y == mouse.y){
        setTimeout(() => is_mouse_moving =false,500)
    }else{
        is_mouse_moving =true
        prev_x = mouse.x;
        prev_y = mouse.y;
    }
    for (let i = 0; i < CircleArray.length; i++) {
        CircleArray[i].update(i);
    }
    c.font = "30px Arial";
    c.fillText(JSON.stringify(balls_touched.length), 10, 50);
    c.fillText(JSON.stringify(stopwatch.duration),100,50);
    if(balls_touched.length == no_of_planets){
        c.font = "60px Arial";
        c.fillText("Winner", 600, 250);
        stopwatch.stop()
    }
}
var stopwatch = new Stopwatch()

stopwatch.start()
init();
animate();


