import React from 'react';
import { render } from 'react-dom';

// Change 1 - Import react-router-dome components 
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import App from './components/App';


const routes = (
	<Router>
		<App/>
	</Router>
)


render(routes, document.getElementById('app'))