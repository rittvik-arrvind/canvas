var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

context.beginPath();
context.font="16px Arial" 
context.fillText("A Sailor's Joy is as simple as a Child's",5,20)
context.fill()

//water
var lGradient = context.createLinearGradient(0,0,400,0);
lGradient.addColorStop=(0,"#0000FF")
lGradient,addColorStop=(1,"#5F9AD1")

context.beginPath();
context.bezierCurveTo(0,270,350,350,400,290)
context.lineTo(400,400)
context.lineTo(0,400)
context.closePath();
context.fillStyle="blue";
context.strokeStyle="blue";
context.fill();
context.stroke()

// curvy left sail
context.beginPath();
context.moveTo(155,150);
context.quadraticCurveTo(95,180,85,260)
context.quadraticCurveTo(105,250,145,260)
context.quadraticCurveTo(135,200,145,145)
context.fillStyle="white";
context.strokeStyle="white";
context.fill();
context.stroke();

//triangle right sail
context.beginPath();
context.moveTo(165,145);
context.lineTo(165,260);
context.lineTo(225,260);
context.closePath();
context.fillStyle="white";
context.strokeStyle="white";
context.fill();
context.stroke()

//sail text
context.beginPath();
context.font="700 20px sans-serif" 
context.strokeStyle = "blue"
context.strokeText("USA",167,250)
context.fill()
context.stroke();

//flag
context.beginPath();
context.moveTo(145,110);
context.lineTo(145,140);
context.lineTo(110,125);
context.closePath();
context.fillStyle="red";
context.strokeStyle="red";
context.fill();
context.stroke();

//bottom
context.rect(70,280,170,40);
context.fillStyle="brown";
context.strokeStyle="brown";
context.fill();
context.stroke();

//mast
context.rect(150,100,10,180);
context.fillStyle="black";
context.strokeStyle="black";
context.fill();
context.stroke();

//sun
var mouseX=330;
var mouseY=70;
function drawSun(){

context.beginPath();
context.arc(mouseX,mouseY,45,0,2*Math.PI,true);

var rGradient= context.createRadialGradiant(mouseX,mouseY,10,mouseX,mouseY,45);
rGradient.addColorStop(0,"#FF8C00");
rGradient.addColorStop(1,"#ffff00");
context.fillStyle="yellow";
context.strokeStyle="yellow";
context.fill();
context.stroke();}

function getPosition(){
    context.clearRect(mouseX-50,mouseY-50,100,100);
    mouseX = event.clientX-canvas.offsetLeft;
    mouseX = event.clientY-canvas.offsetTop;
    drawSun();
}

drawSun();

canvas.addEventListener("mousemove",getPosition,false)

//birds
context.beginPath();
context.moveTo(50,50);
context.quadraticCurveTo(70,70,80,50)
context.quadraticCurveTo(90,70,110,50)
context.strokeStyle="black"
context.stroke();

//bird2
context.beginPath();
context.moveTo(80,80);
context.quadraticCurveTo(100,100,110,80)
context.quadraticCurveTo(120,100,140,80)
context.strokeStyle="black"
context.stroke();