import "./App.css"

import { 
	createContext, 
	useEffect, 
	useRef, 
	useState 
} from "react"

import TextInformation from "../TextInformation/TextInformation"

export const TextContext = createContext();
TextContext.displayName = 'TextContext';



const App = () => {
	
	const textRef = useRef()

	const [text, setText] = useState("")

	useEffect(() => {
		// focus d textarea
		textRef.current.focus()
	}, [])

	const handleChange = (e) => {
		setText(e.target.value)
	}

	console.log(text)


	return (

		<TextContext.Provider value={text} >

			<div className="wrapper">
				<label htmlFor="text">
					Add Your Text Here: 

					<br />

					<textarea
						id="text"
						name="text"
						rows="10"
						cols="100"

						ref={textRef}

						onChange={handleChange}
					>

					</textarea>
				</label>


				<TextInformation />

			</div>

		</TextContext.Provider>
	)
}


export default App