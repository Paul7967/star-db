import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider} from '../swapi-service-context';
import ItemList from './../item-list';
import Row from './../row/row';
import ItemDetails, {Record} from '../item-details/item-details';
import { PersonDetails,
	PlanetDetails,
	StarshipDetails,
	PersonList,
	PlanetList,
	StarshipList } from '../sw-components';
import ErrorBoundry from '../error-boundry';
import DummySwapiService from './../../services/dummy-swapi-service';



export default class App extends Component {
	
	state = {
		showRandomPlanet: true,
		hasError: false,
		swapiService: new DummySwapiService()
	}

	onServiceChange = () => {
		this.setState(({ swapiService }) => {
			const Service = swapiService instanceof SwapiService ? 
								DummySwapiService : SwapiService;

			return {
				swapiService: new Service()
			}
		});
	};

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
			<ErrorBoundry>
				<SwapiServiceProvider value={this.state.swapiService} >
					<div>
						<Header onServiceChange={this.onServiceChange}/>
						
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
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	};
};
