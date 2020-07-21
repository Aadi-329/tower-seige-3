/*class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
       
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var p1=this.sling.bodyA

    line(200,200,this.pointB)    
    
}
   }*/

   class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 30
        }
       
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            
            push()

              line(pointA.x , pointA.y, pointB.x , pointB.y);
              
        pop()
            
           
            
          
        }
    }
    
}