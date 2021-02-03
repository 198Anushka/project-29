class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.p=loadImage("polygon.png");
        this.polygon = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){
        
        

        
        if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
           
            stroke(48,22,8);
            if (pointA.x<220){ strokeWeight(10);}
            else {strokeWeight(3)}
        
            
        }
    }
    
}