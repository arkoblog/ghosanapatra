// server/index.js

import express from 'express';
import path from 'path'

let portNumber = 4000;
let app = express();


app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(portNumber, () => {
	console.log(`App is running on port ${portNumber}`)
})