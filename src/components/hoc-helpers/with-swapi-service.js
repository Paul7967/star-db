import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wpapped, mapMethodsToProps) => {
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