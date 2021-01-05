const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var drops = [];
var boy,boyWalkingAnimation
var max_drops = 100
var  count = 0;
var thunder
function preload(){
    boyWalkingAnimation = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    thunder1 = loadImage("1.png")
    thunder2 = loadImage("2.png")
    thunder3 = loadImage("3.png")
    thunder4 = loadImage("4.png")
}

function setup(){
   createCanvas(1350,550)
    engine = Engine.create();
    world = engine.world;
    boy = new Umbrella(200,200);
    for (i=50; i < max_drops; i++){
        drops.push(new Drops(random(0,1200),random(0,400)))
    }
    boy = createSprite(200,350);
    boy.addAnimation("Walking",boyWalkingAnimation);
    boy.scale = 0.5
}

function draw(){
    background(0)
    Engine.update(engine);

    var rand = Math.round(random(0,4))
    if(frameCount%80 === 0){
      count = frameCount
      console.log(count)
        thunder = createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
            case 1: thunder.addImage("t1",thunder1)
                    break;
            case 2: thunder.addImage("t2",thunder2)
                    break;
            case 3: thunder.addImage("t3",thunder3)
                    break;
            case 4: thunder.addImage("t4",thunder4)
                    break;
            default:break;
        }
        thunder.scale = random(0.3,0.6);
    }
    
    if((count + 10 ===  frameCount) && thunder){
        thunder.destroy()
    }
            //boy.display()
   for (var i = 0;i<drops.length;i++){
       drops[i].display()
       drops[i].updateDrop();
   }
    drawSprites()
}   

