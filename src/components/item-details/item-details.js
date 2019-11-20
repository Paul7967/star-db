import React, { Component } from 'react';
import Spinner from '../spinner';
import './item-details.css';

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
		loading: true,
		itemSelected: false
	};

	componentDidMount() {
		this.updateItem();
	}
	
	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId || 
			this.props.getData !== prevProps.getData || 
			this.props.getImageURL !== prevProps.getImageURL) {
			this.updateItem();
		}
	}

	updateItem() {
		const { itemId, getData, getImageURL } = this.props;
		if (!itemId) {
			this.setState({ loading: false });
			this.setState({ itemSelected: false });
			return;
		}
		this.setState({ loading: true });

		getData(itemId)
			.then((item) => {
				this.setState({ 
					item, 
					image: getImageURL(item),
					loading: false,
					itemSelected: true 
				});
			});
	}

	render() {
		
		if (this.state.loading) {return <Spinner />};
		
		if (!this.state.itemSelected) {
			return <span>Select a item from a list</span>;
		}
		const { item: {name}, image, item } = this.state;

		return (
			<div className="person-details card">
			<img className="person-image" alt="person"
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
			</div>
			</div>
	)
	}
};

;