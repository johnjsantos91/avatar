class Block {
    constructor(_xPos, _yPos, _rotation, _size){
      this.xPos = _xPos;
      this.yPos = _yPos;
      this.rotation = _rotation;
      this.size = _size;
    }
    
    display(){
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  rectMode(CENTER);
  fill(random(255),random(255),random(255));
  rect(0,0,width*.03,width*.03);
  pop();
    }
    
    move(){
     
      this.rotation++;
      
      if(this.yPos <= height){
      //this.yPos = this.yPos + 2;
      this.yPos += 1.5;
      } else {
        this.yPos = 0
      }
    }
    
  }
  
  
  // function block(xPos, yPos, rotation){
  //  push();
  //  translate(xPos, yPos);
  //   rotate(rotation);
  //   rectMode(CENTER);
  //  fill(random(255),random(255),random(255));
  //  rect(0,0,width*.03,width*.03);
  //  pop();
  // }
  