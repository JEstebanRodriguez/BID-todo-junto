import React, { Component } from 'react'
import PersonCard from './components/PersonCard'

export default class App extends Component {
	render() {
		return (
			<>
				<PersonCard
					firstName='Jane'
					lastName='Doe'
					age={45}
					hairColor='black'
				/>
				<PersonCard
					firstName='John'
					lastName='Smith'
					age={88}
					hairColor='Brown'
				/>
				<PersonCard
					firstName='Millard'
					lastName='Fillmore'
					age={50}
					hairColor='Brown'
				/>
				<PersonCard
					firstName='Maria'
					lastName='Smith'
					age={62}
					hairColor='Brown'
				/>
			</>
		)
	}
}
