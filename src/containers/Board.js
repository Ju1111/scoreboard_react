import React, { PureComponent } from 'react'
import Title from '../components/Title'
// import Player from '../components/Player'
import './Board.css'
import Player, { playerShape } from '../components/Player'
import PropTypes from 'prop-types'

export default class Board extends PureComponent {
  static propTypes = {
  players: PropTypes.arrayOf(playerShape).isRequired
  }
  renderPlayers() {
    const { players } = this.props

    return players
      .sort((p1, p2) => (p2.score - p1.score))
      .map((player, index) => (
        <Player key={index} { ...player } />
      ))
  }

  render() {
    return (
      <div>
        <Title content="Scoreboard" />
        <ul className="Board">
          {this.renderPlayers()}
        </ul>
      </div>
    )
  }
}
