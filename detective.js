class Detective{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(900,240,100,150,options);
       // this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = 100
        this.height = 200;
        World.add(world,this.body);
         this.image = loadImage("Sonic.png")

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

