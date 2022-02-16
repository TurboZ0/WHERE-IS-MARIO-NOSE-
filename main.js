noseX= "";
noseY= "";


function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover= loadSound("gameover.wav");
	mario_jump= loadSound("jump.wav");
	mario_kick= loadSound("kick.wav");
	mario_die= loadSound("mariodie.wav");
	mario_coin= loadSound("coin.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video= createCapture(VIDEO);
	video.size(1000,450)
	video.parent("game_console");

	posenet= ml5.poseNet(video, ihavelotsofletters);
	posenet.on('pose', poseforcamera) 

}
function ihavelotsofletters() {
	console.log("Hi");
    
}
 
function poseforcamera(results) {
if (results.length>0) {
console.log(results);

noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
} 
}

function draw() {
	game()
}






