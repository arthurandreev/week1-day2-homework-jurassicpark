const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe("Dinosaur", function () {

let dinosaur;

beforeEach(function () {
  dinosaur = new Dinosaur('Trex', 5);
});

it('should have a type', function () {
  const result = dinosaur.type;
  assert.strictEqual(result, 'Trex');
});

it('should have offsprings', function () {
  const result = dinosaur.offspringNumber;
  assert.deepStrictEqual(result, 5);
});



});
