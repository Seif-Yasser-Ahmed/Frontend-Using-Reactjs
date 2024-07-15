var mycanvas=document.getElementById("mycanvas");
var ctx=mycanvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(mycanvas.width/2,mycanvas.height/4);
ctx.lineTo(mycanvas.width/2,mycanvas.height/4*3);
ctx.lineTo(mycanvas.width/3,mycanvas.height/4*3);
ctx.closePath();
ctx.fillStyle="aqua";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.font = "20pt Math";
ctx.fillStyle = "black";
ctx.fillText("a", mycanvas.width/2+10, mycanvas.height/2);
ctx.beginPath();
ctx.font = "20pt Math";
ctx.fillStyle = "black";
ctx.fillText("b", mycanvas.width/2-50, mycanvas.height/2+150);
ctx.beginPath();
ctx.font = "20pt Math";
ctx.fillStyle = "black";
ctx.fillText("c", mycanvas.width/3, mycanvas.height/2);

ctx.beginPath();
ctx.font = "20pt Math";
ctx.fillStyle = "black";
ctx.fillText("According to pythagoras theorem", mycanvas.width/7, mycanvas.height-40);


