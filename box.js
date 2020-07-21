var score
class Box {
  constructor(x, y, width, height,colur) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':0.5
    }
    this.boxes = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.boxes.Visibility=255
    this.colour=colur
    World.add(world, this.boxes);
  }

 
  


  

  display(){
    
    if(this.boxes.speed<5){
    var pos =this.boxes.position;
    var angle = this.boxes.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.colour);
    rect(0, 0, this.width, this.height);
    pop();
  }
else {
 
 
  this.boxes.Visibility= this.boxes.Visibility-10
  //tint(255,this.boxes.Visibility)
 
 World.remove(world, this.boxes);  
   
}
  

  }
  scorefunc(){
   // console.log(this.boxes.Visibility)
    if(this.boxes.Visibility<0 && this.boxes.Visibility>-115){
   
    score++
  
    }
    text("score:"+score,200,200)
   }
  
}
