var assert = require('assert');
var Character = require('../character.js')

describe('Character', function() {

  var walter;

  beforeEach(function(){
    walter = new Character(
        "Walter White", // name 
        true,           // male 
        false,          // female
        false,          // blond
        false,          // brunette
        true,           // glasses
        true,           // bald
        true            // tie 
    )
  })
  
  describe('Testing character', function() {
    
    it('should have a name', function() {
      assert.strictEqual("Walter White", walter.name);
    });

    it('should have a gender boolean for male', function() {
      assert.strictEqual(true, walter.male);
    });    

    it('should have a gender boolean for female', function() {
      assert.strictEqual(false, walter.female);
    });

    it('should have a blond boolean', function() {
      assert.strictEqual(false, walter.blond);
    });    

    it('should have a brunette boolean', function() {
      assert.strictEqual(false, walter.brunette);
    });

    it('should have a glasses boolean', function() {
      assert.strictEqual(true, walter.glasses);
    });    
  
  });

});