class Attachment{

    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    length:30
    }
    this.pointB=pointB;
    this.rope= Constraint.create(options);
    World.add(world,this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    attach(){
        this.rope.bodyA = bodyA;
    }

    display(){
    if (this.rope.bodyA){
     var pointA=this.rope.bodyA.position;
     var pointB=this.pointB;

     stroke("black");
     strokeWeight(3);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }
}