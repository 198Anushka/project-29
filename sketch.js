const Engine = Engine;
const World= World;
const Bodies = Bodies;
const Constraint = Constraint;

var engine, world;
var  slingshot,polygon;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    base = new Ground(500,height,500,20)
    //1st Stage
    b1 = new Box(300,275,30,40);
    b2 = new Box(330,275,30,40);
    b3 = new Box(360,275,30,40);
    b4 = new Box(390,275,30,40);
    b5 = new Box(420,275,30,40);
    b6 = new Box(450,275,30,40);
    b7 = new Box(480,275,30,40);
    //2nd Stage
    b8 = new Box(330,235,30,40);
    b9 = new Box(360,235,30,40);
    b10 = new Box(390,235,30,40);
    b11 = new Box(420,235,30,40);
    b12 = new Box(450,235,30,40);
    //3rd Stage
    b13 = new Box(360,195,30,40);
    b14 = new Box(390,195,30,40);
    b15 = new Box(420,195,30,40);
    //top Stage
    b16 = new Box(390,155,30,40);



    
    
 polygon=Bodies.circle(50,200,20);
 World.add(world,polygon);



    slingshot = new SlingShot(polygon,{x:100, y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

    slingshot.display();
    base.display();
    ground.display();
    polygon.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();

    imageMode(CENTER)
        image(this.p,polygon.position.x,polygon.position.y,200,20);
         
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
