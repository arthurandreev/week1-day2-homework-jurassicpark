// const Dinosaur = require('../dinosaur');
const Park = function (name, capacity) {
  this.name = name;
  this.capacity = [];
};

Park.prototype.checkCapacity = function(){
  return this.capacity.length;
};

Park.prototype.addDinosaur = function(dinosaur){
  this.capacity.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  for(const type in dinosaur)
  this.capacity.splice(index, 1);
}

Park.prototype.removeDinosaurByType = function(dinosaur){

 for (let dinosaur of this.capacity){
   if(dinosaur.type = dinosaur){
     this.capacity.splice(dinosaur, 1);
 }
}

// Park.prototype.removeDinosaurByOffspring = function(dinosaur){
//
//   for(let i = 0; i > this.; )
//  for (let dinosaur of this.offspring){
//    if(dinosaur.offspring = dinosaur){
//      this.capacity.splice(dinosaur, 1);
//  }
// }

}

module.exports = Park;
