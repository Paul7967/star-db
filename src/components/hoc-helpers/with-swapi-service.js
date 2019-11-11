import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService =(mapMethodsToProps) => (Wpapped) => {
	return (props) => {
		return (
			<SwapiServiceConsumer>
			{
				(swapiService) => {
					const serviceProps = mapMethodsToProps(swapiService)
					return (
						<Wpapped {...props} {...serviceProps} />
					)
				}
			}
		</SwapiServiceConsumer>
		)
	}
};

export default withSwapiService;