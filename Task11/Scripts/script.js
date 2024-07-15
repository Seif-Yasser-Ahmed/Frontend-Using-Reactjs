var mycanvas=document.getElementById("mycanvas");
var ctx=mycanvas.getContext("2d");

var gradient=ctx.createLinearGradient(0,0,0,mycanvas.height/2);
gradient.addColorStop(0,"aqua")
gradient.addColorStop(1,"white")
ctx.fillStyle=gradient;
ctx.fillRect(0,0,mycanvas.width,mycanvas.height/2);



var gradient1=ctx.createLinearGradient(0, mycanvas.height/2, 0, mycanvas.height);
gradient1.addColorStop(0,"lightgreen");
gradient1.addColorStop(1,"white");
ctx.fillStyle=gradient1;

ctx.fillRect(0,mycanvas.height/2,mycanvas.width,mycanvas.height);

ctx.beginPath();
var gradient2 = ctx.createLinearGradient(mycanvas.width/4, mycanvas.height/4*3, mycanvas.width/4, mycanvas.height/4);
gradient2.addColorStop(0, "transparent");
gradient2.addColorStop(1, "black");
ctx.strokeStyle = gradient2;
ctx.moveTo(mycanvas.width/4, mycanvas.height/4*3);
ctx.lineTo(mycanvas.width/4, mycanvas.height/4);
ctx.stroke();
ctx.lineWidth = 3;

ctx.stroke();

ctx.beginPath();
ctx.moveTo(mycanvas.width/4,mycanvas.height/4);
ctx.lineTo(mycanvas.width-mycanvas.width/4,mycanvas.height/4);
ctx.lineWidth = 3;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(mycanvas.width-mycanvas.width/4,mycanvas.height/4);
ctx.lineTo(mycanvas.width - mycanvas.width/4, mycanvas.height/4*3);
ctx.lineWidth = 3;
ctx.stroke();




