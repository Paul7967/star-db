import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View, getData) => {
	return class extends Component {
		state = {
			data: null,
			loading: true,
			error: false
		};
	
		onError = (err) => {
			this.setState({
				error: true,
				loading: false
			});
		};

		onDataLoaded = (data) => {
			this.setState({ data, loading: false });
		};

		componentDidMount() {
			getData()
				.then(this.onDataLoaded)
				.catch(this.onError);
		};

		render() {
			const  {data, loading, error}  = this.state;

			const hasData = !(loading || error);
	
			const errorMessage = error ? <ErrorIndicator /> : null;
			const spinner = loading ? <Spinner /> : null;
			const content = hasData ? <View {...this.props} data = {data} /> : null;

			return (
				<div>
					{errorMessage}
					{spinner}
					{content}
				</div>
			);
		}
	};
};

export default withData;