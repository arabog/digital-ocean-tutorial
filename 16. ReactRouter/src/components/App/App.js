import "./App.css"

import Manatee from "../Manatee/Manatee";
import Narwhal from "../Narwhal/Narwhal";
import Whale from "../Whale/Whale";


import { 
	BrowserRouter as Router,
	Route,
	Routes, //Switch now Routes
	Link
} from "react-router-dom"


function App() {


	return (
		<div className="wrapper">
			<h1> Marine Mammals </h1>




			<Router>
				<nav>
					<ul>
						<li> <Link to="/manatee">Manatee</Link> </li>

						<li> <Link to="/narwhal">Narwhal</Link> </li>

						<li> <Link to="/whale">Whale</Link> </li>
					</ul>
				</nav>

				<Routes>

					<Route exact path="/" element={<Manatee />} />
						
					<Route exact path="/narwhal" element={<Narwhal />} />
						
					<Route exact path="/whale" element={<Whale />} />

				</Routes>

			</Router>
		</div>
	);
}


export default App;

/*
If you didn’t have a router, you could conditionally display
components using the useState Hook.

But this wouldn’t offer a great experience for your users. 
Anytime a user refreshes the page, the user’s selection would 
disappear. Further, they wouldn’t be able to bookmark or
share specific states of the application. A router will solve 
all these problems. The router will preserve the user state 
and will give the user a clear URL that they can save or 
send to others
*/ 
