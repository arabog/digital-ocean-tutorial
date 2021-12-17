import "./App.css"
import { useState } from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route
}from "react-router-dom"

import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
import Login from "../Login/Login";


function App() {
	const [token, setToken] = useState(false);


	if(!token) {
		return (
			<Login userToken={setToken} />
		)
	}


	return (
		<div className="wrapper">
			<h1>Application</h1>

			<Router>

				<Switch>

					<Route path="/dashboard">
						<Dashboard />
					</Route>

					<Route path="/preferences"> 
						<Preferences />
					</Route>

				</Switch>
			</Router>
		</div>
	);
}


export default App;


/*
npm install react-router-dom

npm install --save-dev express cors
*/ 