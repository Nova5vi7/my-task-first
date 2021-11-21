import React, {useState} from "react";
import ProductsWrap from "./containers/ProductsWrap";
import { Context } from "./Context";
import "./styles/common.scss"


const App = () =>{
	const [cartData, setCartData] = useState([]);

	return (
	<Context.Provider value={[cartData, setCartData]}>
		<div className="main">
			<ProductsWrap/>
		</div>
	</Context.Provider>
	
)};


export default App;
