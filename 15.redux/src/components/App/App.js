import "./App.css"

import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
// import { addBird, incrementBird } from "../Redux/Birds/Birds"

// actions
import { addBird, incrementBird } from "../Redux/Action"


/*
It’s important to not try and do too much in your Redux store. 
Keep the reducers focused on maintaining up-to-date information 
then pull and manipulate the data for your users inside the component.
*/ 


function App() {
	/*
		sorting will mutate the array and you never want 
		to mutate the store. Be sure to create a new array 
		by spreading the data before sorting:
	*/ 
	// const birds = useSelector(state => state.birds)

	const birds = [...useSelector(state => state.birds)].sort((a, b) => {
		// return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1

		return b.views - a.views 

	})


	const dispatch = useDispatch()


	/*
	you need to dispatch the addBird action. This will take two steps:
	saving the input to an internal state and triggering the dispatch 
	with onSubmit Use the useState Hook to save the input value.
	*/ 
	const [birdName, setBirdName] = useState("")

	const handleSubmit = event => {
		event.preventDefault()

		dispatch(
			addBird(birdName)
		)

		setBirdName("")
	}


	return (
		<div className="wrapper">
			<h1> Bird List </h1>


			<form onSubmit = {handleSubmit}>
				<label>
					<p> Add Bird </p>

					<input 
						type="text" 
						onChange={e => setBirdName(e.target.value)}
						value={birdName}	
					/>
				</label>

				<div>
					<button type="submit"> Add </button>
				</div>
			</form>


			<ul>
				{
					birds.map(bird => (
						<li key = {bird.name} >
							<h3> {bird.name} </h3>

							<div> 
								Views: {bird.views} 

								<button onClick={() => dispatch(incrementBird(bird.name))}> 
									<span role="img" aria-label="add"> 
										+ 
									</span> 
								</button>
							</div>
						</li>
					))
				}
			</ul>
		</div>
	);
}


export default App;
