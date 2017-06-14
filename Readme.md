### 1. Setting up the server side of things
We begin by first initializing the server side. For this, we are going to be using the ExpressJS framework.

#### Initialize an empty node project

`npm init -y`

#### Initailize empty git repo

git init

#### Create index.js @ `/server/index.html`:

```javascript
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

```
#### Create index.html page @ `/server/index.html`

```html
<!DOCTYPE html>
<html>

<head>
    <title>Auth0 Testing</title>
</head>

<body>
    <h1>Hello world!</h1>
</body>

</html>

```

#### Install express and babel-cli

`npm i --save-dev babel-cli`
`npm i -S express`


#### Install nodemon

`npm i --save-dev nodemon`

#### Update `/package.json` with the server script

```javascript
"scripts": {
	"server": "nodemon --watch server --exec babel-node -- server/index",
	"test": "echo \"Error: no test specified\" && exit 1"
},
```

####  Create `/.babelrc` file 

```javascript
{
	"presets": ["es2015"]
}

```
#### Install required es2015 preset dependency

`npm i --save-dev babel-preset-es2015`

#### Run server
`npm run server`

### 2. Setting up a react component:

#### Update the body section of `/server/index.html`

```html
<body>
    <div id="app"></div>
    <script src="bundle.js"/>
</body>
```

#### Create entry point for react app @ `/client/index.js`

```javascript
import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

render(<App/>, document.getElementById('app'))

```

Create App component @ `/client/components/App.js`
```javascript
import React from 'react';

class App extends React.Component {
	render() {
		return (
				<h1>Hello from react!</h1>
			)
	}
};

export default App;
```

#### Install react and react-dom
`npm i -S react react-dom`

#### Update `/server/index.js` to import and use webpack with webpack config file (Change 1 and Change 2):

```javascript
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
```

#### Create webpack config file at `/webpack.config.dev.js`

```javascript
import path from 'path';

export default {
    devtool: 'source-map',
    entry: [
        './client/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            // js
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: [path.join(__dirname, 'client'),
                path.join(__dirname, 'server/shared')]
            },
            // CSS
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }
        ]
    },
    node: {
        net: 'empty',
        dns: 'empty'
    }
};
```


#### Install webpack and webpack-dev-middleware
`npm i --save-dev webpack webpack-dev-middleware`

#### Install babel-loader and babel react preset
`npm i --save-dev babel-loader babel-preset-react`

#### Update `/.babelrc/` file to include react preset:
```javascript
{
	"presets": ["es2015", "react"]
}
```

#### Run server
`npm run server`