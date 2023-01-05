import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
        <>
            <h2>Things I need to do:</h2>
            <ul>
                <li>Learn React</li>
                <li>Climb Mt. Everest</li>
                <li>Run a marathon</li>
                <li>Feed the dogs</li>
            </ul>
        </>
	)
  }
}
