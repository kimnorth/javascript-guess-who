import React from 'react';
import CardComponent from '../components/CardComponent'

class GameContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      wins: 0,
      cardsInPlay: ["Walter White", "Jesse Pinkman", "Skylar White", "Hank Schrader", "Marie Schrader", "Saul Goodman", "Gus Fring", "Mike Ehrmantraut"],
      cardsOutOfPlay: [],
      numberOfGuesses: 0,
      questionsLeftToAsk: ["Do they wear glasses?", "Are they bald?", "Are they a man?", "Are they wearing a tie?"],
      questionsAsked: [],
      currentSelectedQuestion: null
    }
  }

  createQuestionsMenu(){
    this.state.questionsLeftToAsk.forEach(function(question, index){
      var select = document.querySelector('#questions')
      var option = document.createElement('option')
      option.innerText = question
      option.value = index;
      select.appendChild(option)
    })
  }

  createCharactersMenu(){
    this.state.cardsInPlay.forEach(function(character, index){
      var select = document.querySelector('#characters')
      var option = document.createElement('option')
      option.innerText = character
      option.value = index
      select.appendChild(option)
    })
  }

  componentDidMount(){
    this.createQuestionsMenu();
    this.createCharactersMenu();
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

        <select id="questions"></select>
        <button>Ask</button>

        <select id="characters"></select>
        <button>Guess</button>

      </div>

    )
  }

}

export default GameContainer;