class Box
{
    constructor(x,y,width,height)
    {
        var options = {
            restitution : 0.8,
            friction : 0.8,
            density : 1.0
          }
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.w=width;
          this.h=height;
          World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(200,10,this.w,this.h);
        pop()
    }
}