import "./App.css"
import { useState, useReducer } from "react"


// unctr component
const formReducer = (state, event) => {

	return {
		...state,

		// [event.target.name]: event.target.value

	// remove d event.target keyword & use event parameter in formReducer
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

	const handleChange = (event) => {
                    // event.target.type/.name/.checked
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


						{/* See
							What Object entries is doing in converting obj to array
							input obj:
							const obj = { 
								apple: "fuji", 

								count: "200", 

								name: "Working?", 

								giftwrap: true ,
							}


							output arr: (it is a key value arr)
							const arr = [
								[ 'apple', 'fuji' ],

								[ 'count', '200' ],

								[ 'name', 'Working?' ],

								[ 'giftwrap', true ],

							]
						*/}


						<ul>
							{
								Object.entries(formData).map(  ( [ name, value ] ) => (
									<li key={name}>
                                                                                                    <strong>{name}</strong>: {value.toString()}  {/* convert 4rm arr to str */}
                                                                                          </li>
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

						<input type="number" name="count" onChange={handleChange} />

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


