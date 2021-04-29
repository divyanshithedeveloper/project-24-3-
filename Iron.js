class Iron{
constructor(x,y){
    var options={
        'restitution':0.8,
        'friction':3,
        'density':30
    }
    this.body = Bodies.rectangle(x, y, 300, 300, options);
    this.width = 100;
    this.height = 60;
    World.add(world, this.body);
}
display(){
    var pos1 = this.body.position;
    push();
    translate(pos1.x, pos1.y);
    strokeWeight(3);
    stroke('white')
    fill('black')
    rectMode(CENTER)
    rect(100, 100, this.width, this.height);
    pop();
  };
};

