import { useState } from "react";
import CharacterMap from "../CharacterMap/CharacterMap";
import "./App.css"


function App() {
	/*
		Notice that you are initializing useState
		with an empty string. This will ensure that 
		the value you pass to the CharacterMap
		component is always a string even if the 
		user has not yet entered text.
	*/ 
	const [text, setText] = useState('')


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

			<CharacterMap text={text} />
			
		</div>
	);
}


export default App;
