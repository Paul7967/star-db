import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemDetails, {Record} from '../item-details';

const swapiService = new SwapiService();

const {
	getPerson,
	getPlanet,
	getStarship,
	getPersonImage,
	getPlanetImage,
	getStarshipImage
} = swapiService;

const PersonDetails = ({ itemId }) => {
	return (
		<ItemDetails 
			itemId={itemId} 
			getData={getPerson}
			getImageURL={getPersonImage} >

			<Record field="gender" label="Gender" />
			<Record field="eyeColor" label="Eye Color" />

		</ItemDetails>
	)
};

const PlanetDetails = ({ itemId }) => {
	return (
		<ItemDetails 
			itemId={itemId} 
			getData={getPlanet} 
			getImageURL={getPlanetImage} >
		
			<Record field="population" label="Population" />
			<Record field="rotationPeriod" label="Rotation Period" />
			<Record field="diameter" label="Diameter" />
		</ItemDetails>
	)
};

const StarshipDetails = ({ itemId }) => {
	return (
		<ItemDetails 
			itemId={itemId} 
			getData={getStarship} 
			getImageURL={getStarshipImage} >
		
			<Record field="model" label="Model" />
			<Record field="length" label="Length" />
			<Record field="costInCredits" label="Cost" />
		
		</ItemDetails>
	)
};

export {
	PersonDetails,
	PlanetDetails,
	StarshipDetails
};