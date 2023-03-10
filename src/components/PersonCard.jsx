import React, { Component } from 'react'

export default class PersonCard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			age: this.props.age
		}
	}
	handleAgeIncrease = () => this.setState({ age: this.state.age + 1})
	render() {
		const { firstName, lastName, age, hairColor } = this.props
		return (
			<div className='person-card'>
				<h1>
					{lastName}, {firstName}
				</h1>
				<p>Age: {this.state.age}</p>
				<p>Hair Color: {hairColor}</p>
				<button className='btn' onClick={this.handleAgeIncrease}>Birthday Button for {firstName} {lastName}</button>
			</div>
		)
	}
}
