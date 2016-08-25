
var firework = [];
var gravity;


function setup() {
	createCanvas(600,400);
	stroke(255);
	strokeWeight(4);
	colorMode(HSB);
	gravity = createVector(0, 0.2);
	background(0);
}

function draw() {
	colorMode(RGB);
	background(0, 0, 0, 25);
	
	if(random(1) < 0.03) {
		firework.push(new Fireworks());
	}
	
	for(var i = firework.length  -1; i >= 0 ; i--) {
		firework[i].update();
		firework[i].show();
		// if(firework[i].done()) {
		// 	firework.splice(i, 1);
		// }
	} 
	console.log(firework.length);
}
