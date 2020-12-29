class Polygon{
    constructor(x,y){
        
        this.radius=40;
     this.image=loadImage("polygon.png");
        this.body=Bodies.circle(x,y,40);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        //ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}