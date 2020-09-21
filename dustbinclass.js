class DustBin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          isStatic:true,
          
      }
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = 200;
      this.height = 200;
      this.image = loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    imageMode(CENTER);
      fill("red");
      image(this.image,700,610,this.width, this.height);
    
    }
}