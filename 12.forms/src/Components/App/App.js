import "./App.css"
import { useState, useReducer } from "react"


const formReducer = (state, event) => {

	return {
		...state,

		// name: value pair
		// [event.target.name]: event.target.value

		// remove d target
		[event.name]: event.value
	}
}


function App() {
	const [submitting, setSubmitting] = useState(false)

	const [formData, setFormData] = useReducer(formReducer, {})


	const handleSubmit = event => {
		event.preventDefault()

		setSubmitting(true)

		setTimeout(
			() => {
				setSubmitting(false)
			}, 

			3000
		)
	}

	const handleChange = event => {
		const isCheckbox = event.target.type === "checkbox"

		setFormData(
			{
				name: event.target.name,

				value: isCheckbox ? event.target.checked : event.target.value
			}
		)
	}


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
									<li key={name}><strong>{name}</strong>: {value.toString()}</li>
								))
							}
						</ul>
					</div>
			}

			<form onSubmit={handleSubmit}>
				<fieldset>
					<label>
						<p> Name: </p>

						{/* <input name="name" onChange={setFormData} /> */}
						<input name="name" onChange={handleChange} />
					</label>
				</fieldset>


				<fieldset>
					<label>
						<p> Apple: </p>

						<select name="apple" onChange={handleChange}>
							<option value="">  --Please choose an option-- </option>

							<option value="fuji"> Fuji </option>

							<option value="jonathan"> Jonathan </option>

							<option value="honey-crisp"> Honey Crisp </option>
						</select>
					</label>


					<label>
						<p> Count: </p>

						<input type="number" name="name" onChange={handleChange} />

					</label>

					<label>
						<p> Gift Wrap: </p>

						<input type="checkbox" name="gift-wrap" onChange={handleChange} />

					</label>

				</fieldset>


				<button type="submit"> Submit </button>
			</form>
		</div>
	);
}


export default App;


/*
const formReducer = (state, event) => {

	return {
		...state,

		// name: value pair
		[event.name]: event.value
	}
}


function App() {
	const [submitting, setSubmitting] = useState(false)

	const [formData, setFormData] = useReducer(formReducer, {})


	const handleSubmit = event => {
		event.preventDefault()

		setSubmitting(true)

		setTimeout(
			() => {
				setSubmitting(false)
			}, 

			3000
		)
	}

	const handleChange = event => {
		const isCheckbox = event.target.type === "checkbox"

		setFormData(
			{
				name: event.target.name,

				value: isCheckbox ? event.target.checked : event.target.value
			}
		)
	}


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
									<li key={name}><strong>{name}</strong>: {value.toString()}</li>
								))
							}
						</ul>
					</div>
			}

			<form onSubmit={handleSubmit}>
				<fieldset>
					<label>
						<p> Name: </p>

						<input name="name" onChange={handleChange} />
					</label>
				</fieldset>


				<fieldset>
					<label>
						<p> Apple: </p>

						<select name="apple" onChange={handleChange}>
							<option value="">  --Please choose an option-- </option>

							<option value="fuji"> Fuji </option>

							<option value="jonathan"> Jonathan </option>

							<option value="honey-crisp"> Honey Crisp </option>
						</select>
					</label>


					<label>
						<p> Count: </p>

						<input type="number" name="name" onChange={handleChange} />

					</label>

					<label>
						<p> Gift Wrap: </p>

						<input type="checkbox" name="gift-wrap" onChange={handleChange} />

					</label>

				</fieldset>


				<button type="submit"> Submit </button>
			</form>
		</div>
	);
}

*/ 
