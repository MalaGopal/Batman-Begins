class Drops{
    constructor(x,y){
        var options = {
            isStatic :false,
            //restitution:0.5,
            density : 0.5,
            friction:0.2
        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body)

    }

    updateDrop(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,1200),y:random(0,400)})
        }
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,5,5);
        pop()
    }
}