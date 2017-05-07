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
  
  });

});