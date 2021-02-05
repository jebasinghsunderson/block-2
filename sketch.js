const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var Camvas=createCanvas(1000,700)

  engine = Engine.create()
  world = engine.world
  ground=new Ground(500,680,1000,20)

  ground2=new Ground(520,550,200,20)
  ground3=new Ground(800,480,200,20)

  shooter=new Hexa(210,500,70,70)

  ropes=new Rope(shooter.body,{x:210,y:500})

  block2=new Block(540,460,30,50)
  block1=new Block(570,460,30,50)
  block3=new Block(510,460,30,50)
  block4=new Block(480,460,30,50)
  block5=new Block(450,460,30,50)

  blockred23=new Blockred(505,400,30,50)
  blockred14=new Blockred(475,400,30,50)
  blockred33=new Blockred(535,400,30,50)

  blockgreen2=new Blockgreen(515,350,30,50)
  blockgreen1=new Blockgreen(485,350,30,50)

  blockred2  =new Blockgreen(770,350,30,50)
  blockred1  =new Blockgreen(800,350,30,50)

  blockpink1=new Blockpink(500,280,30,50)
  blockpink2=new Blockpink(785,280,30,50)
  //blockred3=new Blockred(520,400,30,50)

  block21=new Block(840,460,30,50)
  block11=new Block(810,460,30,50)
  block31=new Block(780,460,30,50)
  block41=new Block(750,460,30,50)
  block51=new Block(720,460,30,50)

 blockred21=new Blockred(810,400,30,50)
 blockred11=new Blockred(750,400,30,50)
 blockred31=new Blockred(780,400,30,50)


  
  Engine.run(engine)
}
function draw(){
    background("grey")
   
    Engine.update(engine)
    ground.display()
    ground2.display()
    ground3.display()

  block2.display()
  block1.display()
  block3.display()
  block4.display()
  block5.display()

   blockred23.display()
   blockred14.display()
   blockred33.display()

    shooter.display()

    ropes.display()

    blockgreen2.display()
    blockgreen1.display()
    blockred2.display() 
    blockred1.display()

    block21.display()
    block11.display()
    block31.display()
    block41.display()
    block51.display()
   
    blockred21.display()
    blockred11.display()
    blockred31.display()
    blockpink2.display()
   blockpink1.display()
   fill("brown")
   stroke("white")
   strokeWeight(3)
   textSize(25)
   text("Drag the Hexagonal stone to release it, to lanuch it towards the blocks",150,50)
  
}
function mouseDragged(){
	Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  ropes.fly()
}