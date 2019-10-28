import React, { Component } from 'react';
import './spinner.css';

const Spinner = () => {
	return (
		<div className="lds-css ng-scope center_loader">
			<div className="lds-double-ring">
				<div></div>
				<div></div>
				<div>
					<div></div>
				</div>
				<div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Spinner;

