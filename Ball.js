class Ball {
    constructor(x, y,r) {
      var options = {
          isStatic: false,
        restitution:0.3,
          friction:0.5,
          density:1.2
      } 
      this.x = x;
      this.y = y;
      this.r = r;
    this.body= Bodies.circle(this.x,this.y,this.r/2,options);
   
    
      World.add(world,this.body);
    }
    display(){
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x,this.body.position.y,20,20);
        var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
       ellipseMode(RADIUS);
       ellipse(0,0,this.r,this.r);

      pop();
  };
}