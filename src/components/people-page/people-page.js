import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './people-page.css';
import ErrorButton from '../error-button';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from './../error-boundry/error-boundry';



export default class PeoplePage extends Component {
	swapiService = new SwapiService();
	state = {
		selectedPerson: 1
	}


	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	};

	render() {

		const itemList = (
			<ErrorBoundry>
				<ItemList onItemSelected={this.onPersonSelected} 
					getData={this.swapiService.getAllPeople}>

					{(i) => ( 
						`${i.name} (${i.birthYear})`
					)}

				</ItemList>
				<ErrorButton/>
			</ErrorBoundry>
		);

		const personDetails = (
			<ErrorBoundry>
				<PersonDetails personId = {this.state.selectedPerson} />
			</ErrorBoundry>
		);

		return (
			<ErrorBoundry>
				<Row left={itemList} right={personDetails} />
			</ErrorBoundry>
		);
	}

}

