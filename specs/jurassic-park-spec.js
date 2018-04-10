const assert = require('assert');
const Park = require('../jurassic-park');
const Dinosaur = require('../dinosaur');

describe("Park", function(){
  let park;

  beforeEach(function() {
    park = new Park('DinoVille');
    dinosaur = new Dinosaur('T-Rex', 1);
    dino2 = new Dinosaur('V-Rex', 10);
    dino3 = new Dinosaur('V-Rex', 10);
  });

  it('park should have a name', function(){
    const result = park.name;
    assert.strictEqual(result, 'DinoVille');
  });

  it('capacity of park should start out empty', function(){
    const result = park.capacity;
    assert.deepStrictEqual(result, []);
  });

  it('checks capacity of park', function(){
    const result = park.checkCapacity();
    assert.deepStrictEqual(result, 0);
  });

  it('should be able to add dinosaur', function(){
    park.addDinosaur(dinosaur);
    const result = park.checkCapacity();
    assert.deepStrictEqual(result, 1);
  });

  it('should remove dinosaurs by type', function(){
    park.addDinosaur('V-Rex');
    park.addDinosaur('V-Rex');
    park.addDinosaur('T-Rex');
    park.removeDinosaurByType('V-Rex');
    const result = park.checkCapacity();
    assert.strictEqual(result, 1);

  });

  xit('should get all the dinosaurs with an offspring count of more than 2', function(){
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dinosaur);
    park.removeDinosaurByOffspring(2)
    const result = park.checkCapacity();
    assert.strictEqual(result, 2);
  })

});
