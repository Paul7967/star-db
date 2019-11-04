import React, { Component } from 'react';
import Spinner from '../spinner';
import './item-details.css';
import ErrorButton from '../error-button';

export default class ItemDetails extends Component {

	state = {
		item: null,
		image: null,
		loading: true
	};

	componentDidMount() {
		this.updateItem();
	}
	
	componentDidUpdate(prevProps) {
		if (this.props.itemId != prevProps.itemId) {
			this.updateItem();
		}
	}

	updateItem() {
		const { itemId, getData, getImageURL } = this.props;
		if (!itemId) {
			return;
		}
		this.setState({ loading: true });

		getData(itemId)
			.then((item) => {
				this.setState({ 
					item, 
					image: getImageURL(item),
					loading: false 
				});
			});
	}

	render() {
		
		if (this.state.loading) {return <Spinner />};
		
		const { item: {name, gender, birthYear, eyeColor}, image } = this.state;
		
		return (
			<div className="person-details card">
			<img className="person-image"
				src={image} />

			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<span className="term">Gender</span>
					<span>{gender}</span>
				</li>
				<li className="list-group-item">
					<span className="term">Birth Year</span>
					<span>{birthYear}</span>
				</li>
				<li className="list-group-item">
					<span className="term">Eye Color</span>
					<span>{eyeColor}</span>
				</li>
				</ul>
				<ErrorButton/>
			</div>
			</div>
	)
	}
}
