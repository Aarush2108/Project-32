const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var ground, stand1, stand2;
var block;
var polygon;
var score=0;
var engine;

function setup(){
    createCanvas(1200,400)
engine = Engine.create();
world = engine.world;


ground=new Ground(600,380,1200,20);

stand1=new Ground(500,350,300,10);
stand2=new Ground(800,200,300,10);

poly=new Polygon(320,320,30);

block1=new Block(440,325);
block2=new Block(470,325)
block3=new Block(500,325);
block4=new Block(530,325);
block5=new Block(560,325);

block6=new Block(455,285)
block7=new Block(475,285);
block8=new Block(505,285);

block9=new Block(475,245);


box1=new Block(740,175)
box2=new Block(770,175)
box3=new Block(800,175)
box4=new Block(830,175)
box5=new Block(860,175);

box6=new Block(785,135);
box7=new Block(815,135);
box8=new Block(845,135);

box9=new Block(815,95)

sling=new Slingshot(poly.body,{x:220,y:220})

}
function draw(){
    background("Red")
    Engine.update(engine);
    fill("white");
    textSize(20);
    text("Score : "+score,1100,50);
ground.display();
stand1.display();
stand2.display();
poly.display();
fill("white");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
fill("blue")
block6.display();
block7.display();
block8.display();
fill("green")
block9.display();
block1.score();
block3.score();
block2.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();


fill("skyblue")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
fill("pink")
box6.display();
box7.display();
box8.display();
fill("black")
box9.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();


sling.display();
fill("white")
textSize(20);
text("X"+mouseX+","+"Y"+mouseY,30,30);
}
function mouseDragged(){
    Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
}
