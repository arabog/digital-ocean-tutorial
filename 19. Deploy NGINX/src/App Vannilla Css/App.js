import "./App.css"

import Alert from "../Style Obj/Alert/Alert";
import CartSuccess from "../Style Obj/CartSuccess/CartSuccess";


function App() {


	return (
		<div className="wrapper">
			<Alert  title="Items Not Added" type="error" >
				<div> Your items are out of stock. </div>
			</Alert>

			<CartSuccess />
		</div>
	);
}


export default App;
