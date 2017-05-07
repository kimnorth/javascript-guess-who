import React from 'react';

class GameContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      wins: 0,
      cardsInPlay: [],
      cardsOutOfPlay: []
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
          
        </div>  

      </div>

    )
  }

}

export default GameContainer;