var Character = function(name, male, female, blond, brunette, glasses, bald, tie){
    this.name = name;             // string
    this.male = male;             // boolean
    this.female = female;         // boolean 
    this.blond = blond;           // boolean
    this.brunette = brunette;     // boolean
    this.glasses = glasses;       // boolean
    this.bald = bald;             // boolean
    this.tie = tie;               // boolean
}

module.exports = Character;