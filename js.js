var player = {
	x:50,
	y:100,
	pacmouth:320,
	pacdir:0,
	psize:32,
	speed:5
}

var enemy = {
	x:150,
	y:200,
	speed:5,
	moving:0,
	dirx:0,
	diry:0
}

var ghost = false;
var score = 0, gscore = 0;


var canvas = document.createElement('canvas');
var context = canvas.getContext("2d");
canvas.height = 400;
canvas.width = 600;
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pac.png";

var keyclick = {};
document.addEventListener('keydown', function (event) {
	keyclick[event.keyCode]=true;
	move(keyclick);
}, false);
document.addEventListener('keyup', function (event) {
	delete keyclick[event.keyCode];
	console.log(keyclick);
}, false);

function move(keyclick) {
	if (37 in keyclick)
		{player.x -= player.speed;
		player.pacdir = 64;}
	if (38 in keyclick)
		{player.y -= player.speed;
		player.pacdir = 96;}
	if (39 in keyclick)
		{player.x += player.speed;
		player.pacdir = 0;}
	if (40 in keyclick)
		{player.y += player.speed;
		player.pacdir = 32;}
	if(player.x >= (canvas.width-32)) {
		player.x = 0;
	}	
	if(player.y >= (canvas.height-32)) {
		player.y = 0;
	}	
	if(player.x < 0) {
		player.x=(canvas.width-32);
	}	
	if(player.y < 0) {
		player.y = (canvas.height-32);
	}		
	if(player.pacmouth == 320){
		player.pacmouth = 352;
	} else {
		player.pacmouth = 320;
	}
	render();
}


function checkReady() {
		this.ready = true;
		playGame();
}

function playGame() {
	render();
	requestAnimationFrame(playGame);
}

function myNum(n) {
	return Math.floor(Math.random()*n );
}

function render() {
	context.fillStyle = '#13132C';
	context.fillRect(0,0,canvas.width, canvas.height);

	if(!ghost) {
		enemy.ghostNum = myNum(5)*64;
		enemy.x = myNum(450);
		enemy.y = myNum(250)+30;
		ghost = true;
	}
	if(enemy.moving <0){
		enemy.moving = (myNum(20)*3)+myNum(1);
		enemy.speed = myNum(3.5)+1;
		enemy.dirx = 0;
		enemy.diry = 0;
		if(enemy.moving % 2){
			if(player.x < enemy.x){enemy.dirx = -enemy.speed;}else{enemy.dirx = enemy.speed;}
		}else{
			if(player.y < enemy.y){enemy.diry = -enemy.speed;}else{enemy.diry = enemy.speed;}
		}
	}

	enemy.moving--;
	enemy.x = enemy.x + enemy.dirx;
	enemy.y = enemy.y + enemy.diry;

	if(enemy.x >= (canvas.width-32)) {
		enemy.x = 0;
	}	
	if(enemy.y >= (canvas.height-32)) {
		enemy.y = 0;
	}	
	if(enemy.x < 0) {
		enemy.x=(canvas.width-32);
	}	
	if(enemy.y < 0) {
		enemy.y = (canvas.height-32);
	}		

    context.font = '20px Verdana';
	context.fillStyle = 'white';
	context.fillText("Pacman: "+score+" vs Ghost:"+gscore,175,18);

	context.drawImage(mainImage,enemy.ghostNum,0,32,32,enemy.x,enemy.y,32,32);
	context.drawImage(mainImage,player.pacmouth,player.pacdir,32,32,player.x,player.y,32,32);
	
}

document.body.appendChild(canvas);
