class Block{



  constructor(width,length,height){
    this.width=width[0]    
    this.length=width[1]
    this.height=width[2]

  }
  



getWidth(){
return this.width
}
  
getLength(){
return this.length
}

getHeight(){
return this.height
}

getVolume(){
return this.height * this.width *this.length
}



getSurfaceArea(){
return 2*(this.length*this.width + this.length*this.height + this.width*this.height)
}

}


let newBlock= new Block([2,4,6])

console.log( newBlock.getVolume())