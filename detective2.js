class DetectiveB{
    constructor(){
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(600,255,150,200,options);
     
        this.width = 150;
        this.height = 200;
        this.image = loadImage("Spin.png")
        World.add(world,this.body);
 
         //this.body = Bodies.rectangle(x,y,width,height)
    }
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
    }
