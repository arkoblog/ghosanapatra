// server/index.js

import express from 'express';
import path from 'path'

// Change - 1 (Import webpack)
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev'
//End of change1

let portNumber = 4000;
let app = express();

// Change 2 - Use middleware
app.use(webpackMiddleware(webpack(config)))
//

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(portNumber, () => {
	console.log(`App is running on port ${portNumber}`)
})