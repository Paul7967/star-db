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
		
		const {getPerson, getStarship, getPersonImage, getStarShipImage} = this.swapiService;

		const personDetails = (
			<ItemDetails 
				itemId={5} 
				getData={getPerson}
				getImageURL={getPersonImage} >

				<Record field="gender" label="Gender" />
				<Record field="eyeColor" label="Eye Color" />

			</ItemDetails>
		);
		
		const starshipDetails = (
			<ItemDetails 
				itemId={5} 
				getData={getStarship} 
				getImageURL={getStarShipImage} >
			
				<Record field="model" label="Model" />
				<Record field="length" label="Length" />
				<Record field="costInCredits" label="Cost" />
			
			</ItemDetails>
		);
		
		return (
			<div>
				<Header />
				

				<Row left={personDetails} right={starshipDetails} />
				
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