import Character from './character.js'

class Game {

  constructor(){
    this.characters = [
      const walter = new Character(
        "Walter White", // name 
        true,           // male 
        false,          // female
        false,          // blond
        false,          // brunette
        true,           // glasses
        true,           // bald
        true            // tie 
        ),
      const jesse = new Character(
        "Jesse Pinkman",  // name
        true,             // male
        false,            // female
        true,             // blond
        false,            // brunette
        false,            // glasses
        false,            // bald
        false,            // tie
      ),
      const skylar = new Character(
        "Skylar White",   // name
        false,            // male
        true,             // female
        true,             // blond
        false,            // brunette
        false,            // glasses
        false,            // bald
        false,            // tie
      ),
      const hank = new Character(
        "Hank Schrader",   // name
        true,             // male
        false,            // female
        false,             // blond
        false,            // brunette
        false,            // glasses
        true,            // bald
        false,            // tie
      ),
      const marie = new Character(
        "Marie Schrader",   // name
        false,            // male
        true,             // female
        false,            // blond
        true,             // brunette
        false,            // glasses
        false,            // bald
        false,            // tie
      ),
      const saul = new Character(
        "Saul Goodman",   // name
        true,             // male
        false,            // female
        false,             // blond
        true,             // brunette
        false,            // glasses
        false,            // bald
        true,             // tie
      ),
      const gus = new Character(
        "Gus Fring",   // name
        true,             // male
        false,            // female
        false,            // blond
        true,             // brunette
        true,             // glasses
        false,            // bald
        true,             // tie
      ),
      const mike = new Character(
        "Mike Ehrmantraut",   // name
        true,                 // male
        false,                // female
        false,                // blond
        false,                // brunette
        false,                // glasses
        true,                 // bald
        false,                // tie
      )
    ]
  }  // end of constructor

  

}

export default Game;