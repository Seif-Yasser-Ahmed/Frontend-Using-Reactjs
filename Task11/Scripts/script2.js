var mycanvas=document.getElementById("mycanvas");
var ctx=mycanvas.getContext("2d");

var grd=ctx.createRadialGradient(mycanvas.width/2+20,mycanvas.height/2-20,50,mycanvas.width/2+20,mycanvas.height/2-20,100);
grd.addColorStop(0, "white");
grd.addColorStop(1,'#007FFF');
ctx.fillStyle=grd;
ctx.arc(mycanvas.width/2, mycanvas.height/2, 100, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
var grd2=ctx.createRadialGradient(mycanvas.width-mycanvas.width/2+30,mycanvas.height/2+80,30,mycanvas.width-mycanvas.width/2+30,mycanvas.height/2+80,80);
grd2.addColorStop(0, "white");
grd2.addColorStop(1, "#007FFF");
ctx.fillStyle=grd2;
// ctx.fillStyle = grd;
ctx.arc(mycanvas.width/2, mycanvas.height/2, 80, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.font = "118pt Georgia";
ctx.fillStyle = "white";
ctx.strokeStyle = "White";
ctx.fillText("N", mycanvas.width/2-60, mycanvas.height/2+55);
// ctx.strokeText("N", mycanvas.width/3, mycanvas.height/3);

