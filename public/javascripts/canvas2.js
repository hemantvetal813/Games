var canvas2= document.querySelector('canvas');

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
var c=canvas2.getContext('2d');

function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

c.arc(1000,200, document.getElementById("movingring_outer_diameter").value,0,Math.PI*2,false);
c.stroke();
// c.fill();
