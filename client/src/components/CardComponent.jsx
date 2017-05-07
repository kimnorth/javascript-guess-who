import React from 'react';

class CardComponent extends React.Component {

  render(){

    console.log(this.props)

    return (

      <div>

        <img src={this.props.imageSrc} height="200px" width="150px"  />

      </div>

    )

  }

}

export default CardComponent;