


function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,300);
	video.parent("game_console")

	poseNet = ml5.poseNet(video, modelloaded)
	poseNet.on('pose', gotPoses)
}

function modelloaded(){
console.log("Model is working or should be")
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("Nose X ="+ noseX +" Nose Y ="+ noseY +" ")
	}
}

function draw() {
	game()
}






