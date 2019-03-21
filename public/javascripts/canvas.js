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

var maxradius=60;
var minradius=2;
var vicinity=50;
function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.colour=getRndColor();
    // c.globalAlpha=Math.random();

    this.draw = function(){
            c.beginPath();
            // c.fillStyle=getRndColor();
            c.fillStyle=this.colour;
            c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
            c.stroke();
            c.fill();
            
    }

    this.update= function(){
        if(this.x+this.radius>innerWidth || this.x-this.radius<0){
            this.dx=-this.dx;
        }
        if(this.y+this.radius>innerHeight || this.y-this.radius<0){
            this.dy=-this.dy;
        }
    
        this.x+=this.dx;
        this.y+=this.dy;

        if(mouse.x-this.x<100 && mouse.x-this.x>-100 && mouse.y-this.y< vicinity && mouse.y-this.y>-vicinity){
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
    for (let i = 0; i < 400; i++) {
        
        var radius= Math.random()*10+3;
        var x=Math.random()*(innerWidth-2*radius) +radius;
        var y=Math.random()*(innerHeight-2*radius) + radius,
        dx=(Math.random()-0.5)*1,
        dy=(Math.random()-.5)*1;
        
        CircleArray.push(new Circle(x,y,dx,dy,radius));
    }
}
    
var mouse={
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
    console.log(mouse);
    // this.x+=this.dx;
    // this.y+=this.dy;
    for (let i = 0; i < CircleArray.length; i++) {
        CircleArray[i].update();
    }
}
init();
animate();


