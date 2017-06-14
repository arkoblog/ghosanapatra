Initialize an empty node project

`npm init -y`

Initailize empty git repo

git init

Create a server folder and create index.js file inside it:

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

Install express and babel-cli

`npm i --save-dev babel-cli`
`npm i -S express`


Update package.json with the server script

```javascript
  "scripts": {
    "server": "babel-node server/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Create .babelrc file in root folder

```javascript
{
	"presets": ["es2015"]
}

```
Install required es2015 preset dependency

`npm i --save-dev babel-preset-es2015`


