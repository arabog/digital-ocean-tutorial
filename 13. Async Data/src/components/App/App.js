import "./App.css"

import { lazy, Suspense, useReducer, useState } from "react";

// import RiverInformation from "../RiverInformation/RiverInformation"
const RiverInformation = lazy(
          () => import( 
                    /* webpackChunkName: "RiverInformation" */
                    "../RiverInformation/RiverInformation"
          )
)


// function showAdditional(input) {
// 	const alertInfo = Object.entries(input)
// 				.map(info => `${info[0]} : ${info[1]}`)
// 				.join("\n")

// 	alert(alertInfo)
// }


function App() {
	const [river, setRiver] = useState('nile')
	// const [river, setRiver] = useState()

	const [show, toggle] = useReducer(state => !state, true)


	return (
		<div className="wrapper">
			<h1>World's Longest Rivers </h1>

			<div>
				<button onClick={toggle}> Toggle Details  </button>
			</div>

			<button onClick={() => setRiver('nile')}>Nile</button>
			
			<button onClick={() => setRiver('amazon')}>Amazon</button>
			
			<button onClick={() => setRiver('yangtze')}>Yangtze</button>
			
			<button onClick={() => setRiver('mississippi')}>Mississippi </button>

			
                              <Suspense fallback = { <div style={{fontWeight: "bold", fontSize: "30px"}}> Loading Component </div> }>
                                        {
                                                  show &&
                                                  <RiverInformation name={river} />

                                        }
                              </Suspense>
		</div>
	);
}


export default App;
