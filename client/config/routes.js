import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import App from '../components/App';
import HomePage from '../components/HomePage';


export default (
	<Router>
		<App>
			<Route exact path = "/" component={HomePage}/>
		</App>
	</Router>
)


