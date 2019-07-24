import React, { Component } from 'react'


class Game extends Component {
  render () {
    return (
      // So i've gotten the math of the scores and the basic framework of the assignment looking
      // like how i wanted it to. But i still need the function to randomize images and display
      // them as buttons to run the incScore function and the resetScore & newGame functions if 
      // they accidentally click on an already-clicked image. 
      // 
      // The theme was going to be anime images, and i had the idea
      // of adding the image URLs to an array, then randomly push them into a new array until
      // the original was 'empty'. Once the new array was filled, clicking an image pushes it into
      // a third 'clicked' array, once there, the game continues so long as the image clicked
      // is not contained in the 'clicked' array and the scores will continue to increment.
      // Once an image is clicked twice, the resetScore & newGame functions are run to reset 
      // the score and re-randomize the images.
    )
  }
}

export default Game