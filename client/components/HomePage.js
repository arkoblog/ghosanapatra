import React from 'react';
import css from '../static/css/homepage.css'

class HomePage extends React.Component {
	render() {
		return (
				<div className="container-fluid banner">
						<h1> Welcome to the Auth0 test application </h1>
						<h5>This app was design to test the authentication service provided by Auth0. The app was built using React and Redux.</h5>
						<button className="btn btn-danger btn-lg">Click here to login</button>
					
				</div>
			)
	}
};

export default HomePage;