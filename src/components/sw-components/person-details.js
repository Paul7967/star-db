import React from 'react';
import ItemDetails, {Record} from '../item-details';
import withSwapiService from './../hoc-helpers/with-swapi-service';

const PersonDetails = ({ itemId, swapiService }) => {
	const {getPerson, getPersonImage} = swapiService;
	return (
		<ItemDetails 
			itemId={itemId} 
			getData={getPerson}
			getImageURL={getPersonImage} >

			<Record field="gender" label="Gender" />
			<Record field="eyeColor" label="Eye Color" />
		</ItemDetails>
	);
};

export default withSwapiService(PersonDetails);