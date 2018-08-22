import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

//import data from './testData'
const json = require('./testData.json');
console.log(json);

ReactDOM.render(
    <App contests={json.contests}/>,
    document.getElementById('root')
);
