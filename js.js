var player = {
	x:50,
	y:100,
	pacmouth:320,
	pacdir:0,
}
var score = 0;
var gscore = 0;

var canvas = document.createElement('canvas');
var context = canvas.getContext("2d");
canvas.height = 400;
canvas.width = 600;
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pac.png";

function checkReady() {
		this.ready = true;
		playGame();
}

function playGame() {
	render();
}

function render() {
	context.fillStyle = '#050A50';
	context.fillRect(0,0,canvas.width, canvas.height);
	context.drawImage(mainImage,player.pacmouth,player.pacdir,32,32,player.x,player.y,32,32);
	context.font = '20px Verdana';
	context.fillStyle = 'white';
	context.fillText("Pacman: "+score+" vs Ghost:"+gscore,175,18);
}

document.body.appendChild(canvas);
ctx.fillText("hellooo",10,200);