import "./App.css"

import { useReducer, useState } from "react";

import CharacterMap from "../CharacterMap/CharacterMap";


function App() {
	/*
		Notice that you are initializing useState
		with an empty string. This will ensure that 
		the value you pass to the CharacterMap
		component is always a string even if the 
		user has not yet entered text.
	*/ 
	const [text, setText] = useState('')

	// the useReducer Hook using d reducer fxn reverses the current state.
	const [showExpl, toggleExpl] = useReducer(state => !state, false)


	return (
		<div className="wrapper">

			<label htmlFor="text">
				<p> Add Your Text Here: </p>

				<textarea
					id="text"
					name="text"
					rows="10"
					cols="100"

					onChange={(e) => setText(e.target.value) }
				>

				</textarea>
			</label>

			<div>
				<button onClick={toggleExpl}> Show Explanation </button>
			</div>

			{
				showExpl && 
				<p> This displays a list of the most common characters. </p>
			}

			<CharacterMap text={text} />

		</div>
	);
}


export default App;
