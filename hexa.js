class Hexa{
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            density:1.0,
            friction:1.0,
            restitution:0.5
        }
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.image=loadImage("polygon.png")
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle);
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
        pop()
    }
}