class Slingshot{
constructor(bodyA,pointB){
 var options={bodyA:bodyA,
pointB:pointB,length:10,stiffness:0.04}
this.sling=Matter.Constraint.create(options)
this.pointB=pointB
World.add(world,this.sling)
}
fly(){
 this.sling.bodyA=null   
}
attached(bodyA){
    this.sling.bodyA=bodyA
}
display(){
if(this.sling.bodyA){
    strokeWeight(4)
    stroke("turquoise")
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
}
}


}
