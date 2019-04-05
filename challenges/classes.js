// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(attributes){
    this.newLength = attributes.length;
    this.newWidth = attributes.width;
    this.newHeight = attributes.height;
  }
  
  volume () {
    return (this.length * this.width * this.height);
  }

  surfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. 
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(CubeMakerAttributes){
     super(CubeMakerAttributes);
    }
    // Methods
    cubeVolume () {
      return (this.length * this.length * this.length);
    }
    cubeSurfaceArea () {
        return 6 * (this.length * this.length);
    }
}