import React, {useState} from "react";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import Context from "./context/Context";
import "./styles/common.scss"

const App = () =>{
	const [cartData, setCartData] = useState([]);
	const [productsData, setProductsData] = useState([]);

	const addToCart = (id) => {
		const product = productsData.find((product) => product.id === id);
	
		setCartData([...cartData, product.id]);
	}

	const removeFromCart = (id) => {
		const productLike = cartData.filter((productId) => productId !== id);

		setCartData([...productLike]);
	}

	return (
	<Context.Provider value={{productsData, setProductsData, cartData, setCartData, addToCart, removeFromCart}}>
		<div className="main">
			<CartContainer/>
			<ProductsContainer/>
		</div>
	</Context.Provider>
)};


export default App;
