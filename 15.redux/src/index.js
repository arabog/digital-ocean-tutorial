import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// 4rm react( -redux)
import { Provider } from "react-redux"
import { createStore } from "redux"

// npm install/yarn add --save redux react-redux


import birdApp from "./components/Store/Birds/Birds"


const store = createStore(birdApp)


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,

	document.getElementById('root')
);


// const store = createStore(
// 	() => (
// 		// obj in anonymous fxn
// 		{
// 			// arr of obj
// 			birds: [
// 				{
// 					name: "robin",
// 					views: 1
// 				},

// 				{
// 					name: "hood",
// 					views: 5
// 				}
// 			]
// 		}
// 	)
// )


