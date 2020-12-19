class Sling{
 constructor(bodyA,bodyB){
     var options={
         stifness:0.01,
         length:100,
        bodyA:bodyA,
        bodyB:bodyB,
        
     }
 this.sling=Constraint.create(options)
World.add(world,this.sling)
 
 
 
    }
    display(){
        var pointA=this.sling.bodyA.position
        var pointB=this.sling.bodyB.position
        strokeWeight(4)
        stroke("red")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        
    }

}