import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import { Provider } from 'react-redux';


import store from '../store'


import App from '../components/App';
import HomePage from '../components/HomePage';


export default (
	<Provider store = {store}> 
	<Router>
		<App>
			<Route exact path = "/" component={HomePage}/>
		</App>
	</Router>
	</Provider>
)


