import Alert from "../Alert/Alert";
import CartSuccess from "../CartSuccess/CartSuccess";

// const wrapper = {
// 	padding: 20
// }

function App() {
	const wrapper = {
		padding: 20
	}


	return (
		<div style={wrapper}>
			<Alert 
				title="Items Not Added" 
				type="error" 
			>
				<div> Your items are out of stock. </div>
			</Alert>

			<CartSuccess />
		</div>
	);
}


export default App;
