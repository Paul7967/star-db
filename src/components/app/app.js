import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import './app.css';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';

import ItemList from './../item-list/item-list';


export default class App extends Component {
	swapiService = new SwapiService();
	state = {
		showRandomPlanet: true,
		hasError: false
	}

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
			showRandomPlanet: !state.showRandomPlanet
			}
		});
	};


	componentDidCatch() {
		this.setState({hasError: true});
	}

	render() {
		
		if (this.state.hasError) {
			return <ErrorIndicator />
		}
		
		const planet = this.state.showRandomPlanet ?
			<RandomPlanet/> :
			null;
		return (
			<div>
				<Header />
				{ planet }

				<div className="row mb2 button-row">
					<button
						className="toggle-planet btn btn-warning btn-lg"
						style={{ margin: "0 10px 20px 30px"}}
						onClick={this.toggleRandomPlanet}>
						Toggle Random Planet
					</button>
					<ErrorButton />
				</div>
				
				<PeoplePage />

		

			</div>
		);
	};
};
