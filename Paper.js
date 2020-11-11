class Paper {
    constructor (x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 1.0,
            density: 1.2
        }


        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("IMGs/paper.png");
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;

        push()
        translate(pos.x , pos.y)

        rectMode(CENTER);
        strokeWeight(4);
        fill(255,0,255);
        
        imageMode(CENTER);
        //ellipse(0, 0, 2*this.r, 2*this.r);

        
        image(this.image, 0, 0, this.r, this.r);

        pop()
        
    }
 }