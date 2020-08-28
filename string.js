class String {
    constructor(bodyA,bodyB,offset) {
        this.offset = offset*30;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x:this.offset,y:0}
        };
        this.str = Constraint.create(options);
        World.add(world,this.str);
    }
    display(){
        var pointA = this.str.bodyA.position;
        var pointB = this.str.bodyB.position;

        var OffX = pointB.x + this.offset;

        strokeWeight(2);
        line(pointA.x,pointA.y,OffX,pointB.y);
    }
};