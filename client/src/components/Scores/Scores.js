import React, { Component } from 'react'
import './Scores.css'

class Scores extends Component {
  render () {
    let { score, highScore } = this.props
    return (
      <>
        <div className='scoreSection'>
          <h1 className='curScore'>Your Score : {score}</h1>
          <h1 className='highScore'>Current High Score : {highScore}</h1>
        </div>
      </>
    )
  }
}

export default Scores