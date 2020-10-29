class Dustbin {
    constructor (x, y, width, height) {

        var options = {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height = height;
        this.width = width;
        
        World.add(world, this.body);
        this.image = loadImage("Images/dustbingreenIMG.png");
        
    }

    display() {
        var pos = this.body.position;
        
        rectMode(CENTER);
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);

    }
}