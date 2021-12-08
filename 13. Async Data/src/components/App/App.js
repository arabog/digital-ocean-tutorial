import "./App.css"

import { useState } from "react";

import RiverInformation from "../RiverInformation/RiverInformation"


// function showAdditional(input) {
// 	const alertInfo = Object.entries(input)
// 				.map(info => `${info[0]} : ${info[1]}`)
// 				.join("\n")

// 	alert(alertInfo)
// }


function App() {
	const [river, setRiver] = useState('nile')


	return (
		<div className="wrapper">
			<h1>World's Longest Rivers </h1>

			<button onClick={() => setRiver('nile')}>Nile</button>
			<button onClick={() => setRiver('amazon')}>Amazon</button>
			<button onClick={() => setRiver('yangtze')}>Yangtze</button>
			<button onClick={() => setRiver('mississippi')}>Mississippi </button>

			<RiverInformation name={river} />
		</div>
	);
}


export default App;
