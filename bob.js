class Bob {
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0.01,
            density:1.4
        }
        
        this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, 15, options)
		World.add(world, this.body);
	}
	display(){
        var papos=this.body.position;		
            
        push()
		translate(papos.x, papos.y);
		rectMode(CENTER)
		strokeWeight(3);
		fill(255,0,255)
		ellipse(0,0,30,30);
		pop()
	}
};