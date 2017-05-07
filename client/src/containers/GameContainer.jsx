import React from 'react'
import Game from '../models/game.js'
import CardComponent from '../components/CardComponent'

class GameContainer extends React.Component {

  constructor(props){
    super(props)
    this.game = new Game()
    this.state = {
      wins: 0,
      chosenCharacterCard: null,
      currentSelectedQuestion: null,
      cardsInPlay: [],
      cardsOutOfPlay: [],
      numberOfGuesses: 0,
      questionsLeftToAsk: [],
      questionsAsked: [],
      givenAnswer: ""
    }
  }

  shuffleDeck(){
    this.state.cardsInPlay = [
      { name: "Walter White", male: true, female: false, blond: false, brunette: false, glasses: false, bald: true, tie: false },
      { name: "Jesse Pinkman", male: true, female: false, blond: true, brunette: false, glasses: false, bald: false, tie: false},
      { name: "Skylar White", male: false, female: true, blond: true, brunette: false, glasses: false, bald: false, tie: false},
      { name: "Hank Schrader", male: true, female: false, blond: false, brunette: false, glasses: false, bald: true, tie: false},
      { name: "Marie Schrader", male: false, female: true, blond: false, brunette: true, glasses: false, bald: false, tie: false},
      { name: "Saul Goodman", male: true, female: false, blond: false, brunette: true, glasses: false, bald: false, tie: true},
      { name: "Gus Fring", male: true, female: false, blond: false, brunette: true, glasses: true, bald: false, tie: true},
      { name: "Mike Ehrmantraut", male: true, female: false, blond: false, brunette: false, glasses: false, bald: true, tie: false},
    ]
  }

  shuffleQuestions(){
    this.state.questionsLeftToAsk = [
        { query: "glasses", questionString: "Do they wear glasses?"},
        { query: "bald", questionString: "Are they bald?" },
        { query: "man", questionString: "Are they male?" },
        { query: "woman", questionString: "Are they female?" },
        { query: "blond", questionString: "Are they blond?" },
        { query: "brunette", questionString: "Are they brunette?" },
        { query: "tie", questionString: "Are they wearing a tie?" }
    ]
    this.state.currentSelectedQuestion = this.state.questionsLeftToAsk[0].questionString
  }

  pickRandomCard(){
    const randomNumber = (Math.floor(Math.random() * 8))
    this.state.chosenCharacterCard = this.state.cardsInPlay[randomNumber]
    console.log("Chosen card is", this.state.chosenCharacterCard.name)
  }

  componentWillMount(){
    this.shuffleDeck();
    this.shuffleQuestions();
    this.pickRandomCard();
    console.log(this.state.chosenCharacterCard)
  }

  createQuestionsMenu(){
    this.state.questionsLeftToAsk.forEach(function(question, index){
      var select = document.querySelector('#questions')
      var option = document.createElement('option')
      option.innerText = question.questionString
      option.value = index
      select.appendChild(option)
    })
  }

  createCharactersMenu(){
    this.state.cardsInPlay.forEach(function(character, index){
      var select = document.querySelector('#characters')
      var option = document.createElement('option')
      option.innerText = character.name
      option.value = index
      select.appendChild(option)
    })
  }

  componentDidMount(){
    this.createQuestionsMenu();
    this.createCharactersMenu();
  }

  setCurrentSelectedQuestion(event){
    const index = event.target.value;
    this.state.currentSelectedQuestion = this.state.questionsLeftToAsk[index]
    console.log(this.state.currentSelectedQuestion)
  }

  respondToQuestion(boolean){
    if (boolean){
      this.state.givenAnswer = "Yes!"
      const answerSpace = document.querySelector('#answer-space')
      answerSpace.innerText = this.state.givenAnswer
    }
    else if (!boolean){
      this.state.givenAnswer = "No!"
      const answerSpace = document.querySelector('#answer-space')
      answerSpace.innerText = this.state.givenAnswer
    }
    console.log(this.state.givenAnswer)
  }

  askQuestion(){
   const question = this.state.currentSelectedQuestion.query;
   console.log(question)
   console.log(this.state.chosenCharacterCard)
   if (this.state.chosenCharacterCard[question]){
    console.log("They have this")
    this.respondToQuestion(true)
   }
   else {
    console.log("They don't have this")
    this.respondToQuestion(false)
   }

  }





  render(){

    return (

      <div>
        <h1>Guess Who</h1>

        <div id="scoreboard">
          <p>Wins: {this.state.wins}</p>
        </div>

        <div id="main-board">

        <div className="flex-row">

          <CardComponent id="walter-white" imageSrc={"http://vignette4.wikia.nocookie.net/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg/revision/latest?cb=20130928055404"} />
          <CardComponent id="jesse-pinkman" imageSrc={"https://upload.wikimedia.org/wikipedia/en/f/f2/Jesse_Pinkman2.jpg"} /> 
        </div>

       <div className="flex-row"> 
          <CardComponent id="skylar-white" imageSrc={"http://vignette1.wikia.nocookie.net/breaking-bad-usa/images/f/f1/Skyler_White.jpg/revision/latest?cb=20140323104413"} /> 
          <CardComponent id="hank-schrader" imageSrc={"http://images6.fanpop.com/image/photos/36800000/Hank-Schrader-Breaking-Bad-hank-schrader-36838913-400-535.jpg"} />
        </div>

        <div className="flex-row">

          <CardComponent id="marie-schrader" imageSrc={"https://vignette4.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645"} />
          <CardComponent id="saul-goodman" imageSrc={"https://upload.wikimedia.org/wikipedia/en/1/16/Saul_Goodman.jpg"} />

        </div>
        <div className="flex-row">
          <CardComponent id="gus-fring" imageSrc={"https://upload.wikimedia.org/wikipedia/en/7/7b/Gustavo_fring_breaking_bad.jpg"} />
          <CardComponent id="mike-ehrmantraut" imageSrc={"http://cdn4.thr.com/sites/default/files/imagecache/NFE_portrait/2014/01/jonathan_banks.jpg"} />
        </div>
        </div>

        <div id="ask-questions-div">
            <select onChange={this.setCurrentSelectedQuestion.bind(this)} id="questions"></select>
            <button onClick={this.askQuestion.bind(this)}>Ask</button>
        </div>

        <div id="make-guesses-div">
          <select id="characters"></select>
          <button>Guess</button>
        </div>

        <div id="answer-div">
          <p>Answer: <span id="answer-space"></span></p>
        </div>

      </div>

    )
  }

}

export default GameContainer;