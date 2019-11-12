import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider} from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import DummySwapiService from './../../services/dummy-swapi-service';
import { PeoplePage, StarshipsPage, PlanetsPage } from '../pages';


export default class App extends Component {
	
	state = {
		hasError: false,
		swapiService: new SwapiService()
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

	componentDidCatch() {
		this.setState({hasError: true});
	}

	render() {
		
		if (this.state.hasError) {
			return <ErrorIndicator />
		}
		
		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.state.swapiService} >
					<div>
						<Header onServiceChange={this.onServiceChange}/>

						<RandomPlanet updateInterval={500000} />

						<PeoplePage />
						<StarshipsPage />
						<PlanetsPage />
						
					</div>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	};
};
