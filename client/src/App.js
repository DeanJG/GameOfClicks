import React, { Component } from 'react'

// import Game from './components/Game'
import Scores from './components/Scores'
import Rules from './components/Rules'


class App extends Component {
  state = {
    score: 0,
    highScore: 0
  }

  incScore = (num) => {
    if (num) {
      if (this.state.highScore < this.state.score + 1) {
        this.setState({
          score: this.state.score + 1,
          highScore: this.state.score + 1
        })
      } else {
        this.setState({
          score: this.state.score + 1
        })
      }
    }
  }
  resetScore = () => {
    this.setState({ score: 0 })
  }
  render() {
    let { score, highScore } = this.state

    return (
      <>
        <Scores score={score} highScore={highScore} />
        {/* <Game incScore={this.incScore} resetScore={this.resetScore} /> */}
        <Rules />
      </>
    )
  }
}

export default App
