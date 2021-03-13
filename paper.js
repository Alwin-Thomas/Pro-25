class Paper{
    constructor(x,y,r){
        var paperOptions={
            restitution:0.3,
            friction:0,
            density:1.2,
            isStatic:false    
        }
    this.r=r    
    this.body=Bodies.circle(x,y,this.r,paperOptions)
    this.image=loadImage("paper.png")
    World.add(world,this.body)
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)  
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}
