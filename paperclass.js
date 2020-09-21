class   PaperBall   {
    constructor(x, y, radius ) {
      var options = {
          'restitution':0.3,
          isStatic:false,
          density:1.2,
          friction:1.0,
          
      }
      this.body = Bodies.circle(x, y,radius/2, options);
      this.radius = radius;
     
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    imageMode(CENTER);
      fill("red");
      image(this.image,pos.x,pos.y, this.radius, this.radius);
    
    }
}
    