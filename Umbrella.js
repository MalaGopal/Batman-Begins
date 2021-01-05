class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true,
        }
        this.body = Bodies.circle(x,y,50,options)
        World.add(world,this.body);
        this.boyanimation = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")


    }

    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.boyanimation,pos.x,pos.y,10,10)

    }
}