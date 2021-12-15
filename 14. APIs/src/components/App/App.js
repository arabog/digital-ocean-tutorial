import "./App.css"
import React, { useEffect, useRef, useState } from 'react';

import { getList, setItem } from "../../services/list"

/* to run d json-server: npm run api
check more info inside package.json file */


function App() {
	const [list, setList] = useState([]);

	const [itemInput, setItemInput] = useState("");

	const [alert, setAlert] = useState(false);

	let mounted = useRef(true);
	

	useEffect(() => {
		mounted.current = true;

		if (list.length && !alert) {
			return 
		}

		getList()
			.then(items => {
				if(mounted.current) {
					setList(items)
				}
			})

		return () => mounted.current = false;
	}, [alert, list])


	useEffect(() => {
		if(alert) {
			setTimeout(
				() => {
					if (mounted.current) {
						setAlert(false)
					}
				}, 1000
			)
		}
	}, [alert])


	const handleSubmit = (event) => {
		event.preventDefault()

		setItem(itemInput)
			.then(
				() => {
					if (mounted.current) {
						setItemInput("")

						setAlert(true)
					}
				}

			)
	}


	return (
		<div className="wrapper">
			<h1> My Grocery List </h1>

			<ul>
				{
					list.map(item => (
						<li key={item.id}> {item.item} </li>
					))
				}
			</ul>

			{
				alert && <h2> Submit Successful </h2>
			}

			<form onSubmit={handleSubmit}>
				<label>
					<p> New Item </p>

					<input 
						type="text" 

						onChange={event => setItemInput(event.target.value)}

						value={itemInput}
					/>
				</label>

				<button type="submit"> Submit </button>
			</form>
		</div>
	);
}


export default App;
