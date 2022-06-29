// Your code here
class Polygon{
  constructor(array){
    this.array = array
  }
  get countSides(){
    return this.array.length
  }
  get perimeter(){
    return this.array.reduce((total, item) => total + item)
  }
}
class Triangle extends Polygon{
  get isValid(){
    const sum = this.array[0] + this.array[1]
    return (sum > this.array[2])
  }
}