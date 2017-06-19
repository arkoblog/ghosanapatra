import React from 'react';
import css from '../static/css/homepage.css'
import FacebookLogin from './logins/FaceBookLogin'
import GoogleLogin from './logins/GoogleLogin'

class HomePage extends React.Component {
	render() {
		return (
			<div className="container-fluid banner">
				<h1> Welcome to the Auth0 test application </h1>
				<h5>This app was design to test the authentication service provided by Auth0. The app was built using React and Redux.</h5>
				<FacebookLogin/>
				<GoogleLogin/>
			</div>
		)
	}
};

export default HomePage;