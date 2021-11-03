import React from "react"
import "./App.css"



const displayEmojiName = event => {
	alert(event.target.id)
}


function App() {
	const greeting = "greeting";

	// const displayEmojiName = event => {
	// 	alert(event.target.id)
	// }


	return (
		<div className="container">
			<h1 id={greeting}>Hello, World</h1>

			<p> I am writing JSX </p>

			<ul>
				<li>
					<button 
						onClick = {displayEmojiName}
					>
						<span role="img" aria-label="grinning face" id="grinning face">😀</span>
					</button>
				</li>

				<li>
					<button 
						onClick = {displayEmojiName}
					>
						<span role="img" aria-label="party popper" id="party popper">🎉 </span>
					</button>
				</li>

				<li>
					<button 
						onClick = {displayEmojiName}
					>
						<span role="img" aria-label="woman dancing" id="woman dancing">💃</span>
					</button>
				</li>
			</ul>
		</div>
	)
}


export default App;
