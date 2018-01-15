import React from 'react';
import ReactDom from 'react-dom';
import App from './app/index.jsx';

console.log('hi')
//console.log(ReactDom)
//console.log(document.getElementById('app'))
ReactDom.render(<App/>, document.getElementById('app'));
