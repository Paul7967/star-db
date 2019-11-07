import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

import ItemList from './../item-list';
import Row from './../row/row';
import ItemDetails, {Record} from '../item-details/item-details';
import { PersonDetails,
	PlanetDetails,
	StarshipDetails,
	PersonList,
	PlanetList,
	StarshipList } from '../sw-components';


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
		
		const {getPerson, getStarship, getPersonImage, getStarShipImage, 
				getAllPeople, getAllPlanets} = this.swapiService;

		return (
			<div>
				<Header />
				
				<PersonDetails itemId={11} />
				<p>____</p>
				<StarshipDetails  itemId={5} />
				<p>____</p>
				<PlanetDetails  itemId={9} />
				<p>____</p>

				<p>____</p>
				<PersonList /> 				
				<p>____</p>
				<StarshipList /> 
				<p>____</p>
				<PlanetList /> 
				
				<div className="row mb2 button-row">
					<button
						className="toggle-planet btn btn-warning btn-lg"
						style={{ margin: "0 10px 20px 30px"}}
						onClick={this.toggleRandomPlanet}>
						Toggle Random Planet
					</button>
					<ErrorButton />
				</div>
				
			</div>
		);
	};
};
/* <PeoplePage /> */
// { planet }