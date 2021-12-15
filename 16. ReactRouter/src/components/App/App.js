import "./App.css"
import AnimalCard from "../AnimalCard/AnimalCard";
import data from "./data";

function showAdditional(input) {
	const alertInfo = Object.entries(input)
				.map(info => `${info[0]} : ${info[1]}`)
				.join("\n")

	alert(alertInfo)
}


function App() {


	return (
		<div className="wrapper">
			<h1> Animals </h1>

			{
				data.map(animal => (
					<AnimalCard 
						additional = {animal.additional}
						diet = {animal.diet}
						key = {animal.name}
						name = {animal.name}
						scientificName = {animal.scientificName}
						size = {animal.size}

						showAdditional = {showAdditional}
					/>
				))
			}
		</div>
	);
}


export default App;
