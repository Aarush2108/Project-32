class Block{
    constructor(x,y){
        var options={
            restitution:0.4
        }
        this.width=30;
        this.height=40;
        this.body=Bodies.rectangle(x,y,30,40,options);
        World.add(world,this.body);
        this.visiblity = 255;
    }
    score(){
        if(this.visiblity<=0&&this.visiblity>-25){
            score++
        }
    }
    display(){
        var pos=this.body.position;
        if(this.body.speed<3){
            push();
            translate(pos.x,pos.y);
            rectMode(CENTER);
            stroke("black");
            rect(0,0,this.width,this.height);
           pop();
        }
        else{
         World.remove(world,this.body);
         push();
         this.visiblity = this.visiblity-5;
        tint(255,this.visiblity);
        pop();
        }

        
    }
}