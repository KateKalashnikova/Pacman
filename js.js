/*var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
ctx.fillText("hellooo",10,200);*/

var canvas = document.createElement('canvas');
var ctx = canvas.getContext("2d");
canvas.height = 400;
canvas.width = 600;
document.body.appendChild(canvas);
ctx.fillText("hellooo",10,200);