import "./App.css"
import { useState, useReducer } from "react"


// ctrlled compont
const formReducer = (state, event) => {
	if(event.reset) {
		return {
			apple: '',

			count: 100,
			
			name: '',
			
			"gift-wrap": false
		}
	}

	return {
		...state,

		// name: value pair
		[event.name]: event.value
	}
}

/*
you converted your uncontrolled components to controlled
components by setting the value or the checked attributes dynamically.
You also learned how to refill data by setting a default state and how to
clear the data by updating the form reducer to return default values.
*/ 

function App() {
	const [submitting, setSubmitting] = useState(false)

	const [formData, setFormData] = useReducer(formReducer, {count: 100})


	const handleSubmit = event => {
		event.preventDefault()

		setSubmitting(true)

		
		setTimeout(
			() => {
				setSubmitting(false)

				setFormData(
					{
						reset: true
					}
				)
			}, 

			3000
		)
	}

	const handleChange = (event) => {
		const isCheckbox = event.target.type === "checkbox"

		setFormData(
			{
				name: event.target.name,

				value: isCheckbox ? event.target.checked : event.target.value
			}
		)
	}

	console.log(formData)


	return (
		<div className="wrapper">
			<h1> How About Them Apples </h1>

			{
				submitting && 
					<div>
						You are submitting the following... 

						<ul>
							{
								Object.entries(formData).map(([name, value]) => (
									<li key={name}>
										<strong>{name}</strong>: {value.toString()}
									</li>
								))
							}
						</ul>
					</div>
			}


			{/* add an event handler to the <form> elemt, not the  <button> */}
			<form onSubmit={handleSubmit}>
				<fieldset disabled={submitting} >
					<label>
						<p> Name: </p>

						{/* <input name="name" onChange={setFormData} /> */}
						<input 
							name="name" 
							onChange={handleChange} 
							value = {formData.name || ''}
						/>
					</label>
				</fieldset>


				<fieldset disabled={submitting} >
					<label>
						<p> Apple: </p>

						<select name="apple" onChange={handleChange} value = {formData.apple || ''} >
							<option value="">  --Please choose an option-- </option>

							<option value="fuji"> Fuji </option>

							<option value="jonathan"> Jonathan </option>

							<option value="honey-crisp"> Honey Crisp </option>
						</select>
					</label>


					<label>
						<p> Count: </p>

						<input 
							type="number" 
							name="count" 
							onChange={handleChange} 
							step="1" 
							value={formData.count || ''}
						/>

					</label>

					<label>
						<p> Gift Wrap: </p>

						<input 
							type="checkbox" 
							name="gift-wrap" 
							onChange={handleChange} 

							/*As before, the checkbox is a little different. Instead of 
							setting a value, you’ll need to set the checked attribute.*/ 
							checked={formData['gift-wrap'] || false} 
							disabled={formData.apple !== "fuji"}
						/>

					</label>

				</fieldset>


				<button 
					type="submit" //prevent default reload
					disabled={submitting}
				> 
					Submit 
				</button>
			</form>
		</div>
	);
}


export default App;


