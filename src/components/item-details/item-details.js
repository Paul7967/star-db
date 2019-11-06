import React, { Component } from 'react';
import Spinner from '../spinner';
import './item-details.css';
import ErrorButton from '../error-button';

export const Record = ({ item, field, label }) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</li>
	);
};


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
		
		const { item: {name}, image, item } = this.state;
		
		return (
			<div className="person-details card">
			<img className="person-image"
				src={image} />

			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					{ 
						React.Children.map(this.props.children, (child) => {
							return React.cloneElement(child, {item});
						})
					}
				</ul>
				<ErrorButton/>
			</div>
			</div>
	)
	}
};

;