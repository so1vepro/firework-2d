

function Fireworks() {
	this.hu = random(255);
	this.fireworks = new particle(random(width),height,this.hu,true);
	this.exploded = false;
	this.particle2 = [];


	this.done = function() {
		if(this.explode && this.particle2.length === 0) {
			return true;
		} else {
			return false;
		}
	}

	this.update = function() {
		if(!this.exploded) {
			this.fireworks.applyForce(gravity);
			this.fireworks.update();

			if(this.fireworks.vel.y  >= 0) {
				this.exploded = true;
				this.explode();
			}
		}
		for(var i = this.particle2.length-1; i >= 0; i--) {
			this.particle2[i].applyForce(gravity);
			this.particle2[i].update();
			if(this.particle2[i].done()) {
				this.particle2.splice(i, 1);
			}
		}
	}
	this.explode = function() {
		for(var i = 0; i < 100; i++) {
			var p = new particle(this.fireworks.pos.x, this.fireworks.pos.y, this.hu, false);
			this.particle2.push(p);
		}
	}
	this.show = function() {
		if(!this.exploded) {
			this.fireworks.show();
		}
		for(var i = 0; i < this.particle2.length; i++) {
			this.particle2[i].show();
		}
	}


}