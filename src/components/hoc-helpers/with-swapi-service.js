import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wpapped) => {
	return (props) => {
		return (
			<SwapiServiceConsumer>
			{
				(swapiService) => {
					return (
						<Wpapped {...props} swapiService={swapiService} />
					)
				}
			}
		</SwapiServiceConsumer>
		)
	}
};

export default withSwapiService;