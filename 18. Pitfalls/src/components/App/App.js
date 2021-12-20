import "./App.css"

import { useCallback, useReducer, useState } from "react";

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

	
	// const transformer =  (item) => item.toLowerCase()
	/*
		In this particular component, you do not actually need the
		useCallback Hook. You could declare the function outside 
		of the component and it would never re-render. You should 
		only declare functions inside of your component if they 
		require some sort of prop or stateful data. But there are
		times when you need to create functions based on internal 
		state or props and in those situations you can use the
		useCallback Hook to minimize re-renders.
	*/ 
	const transformer = useCallback ( 
		(item) => item.toLowerCase(), 
		
		[]
	)

	/*useCallback(
		() => {
			callback
		},
		[input],
	)*/


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

			{/* {
				// move to CharacterMap
				showExpl && 
				<p> This displays a list of the most common characters. </p>
			} */}

			<CharacterMap 
				showExpl = {showExpl} 
				text={text} 
				transformer = {transformer}
			/>

		</div>
	);
}


export default App;

/*
	a === a  // This will evaluate to true

	a === b  // This will evaluate to false
*/ 