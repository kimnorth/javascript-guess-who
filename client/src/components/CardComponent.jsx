import React from 'react';

class CardComponent extends React.Component {

  render(){

    return (

      <div>
        <img src={this.props.imageSrc} height="200px" width="150px"  />
      </div>

    )

  }

}

export default CardComponent;