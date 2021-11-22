import React, {useState} from "react";
import ProductsContainer from "./containers/ProductsContainer";
import Cart from "./components/Cart";
import Context from "./context/Context";
import "./styles/common.scss"

const App = () =>{
	const [cartData, setCartData] = useState([]);
	const [productsData, setProductsData] = useState([]);

	const searchToArr = (id, array) => array.find((product) => product.id === id);

	const addToCart = (id) => {
		const product = searchToArr(id, productsData)

		const cartСopy = [...cartData]

		const productLike = searchToArr(product.id, cartСopy);

		if(productLike) return;

		cartСopy.push(product);
	
		setCartData(cartСopy)
	}

	const removeFromCart = (id) => {
		const productLike = searchToArr(id, cartData)

		if (!productLike) return;

		const cartСopy = [...cartData]

		const productInd = cartСopy.indexOf(productLike)
		
		cartСopy.splice(productInd, 1);

		setCartData(cartСopy)
	}

	return (
	<Context.Provider value={{productsData, setProductsData, cartData, setCartData, addToCart, removeFromCart}}>
		<div className="main">
			<Cart/>
			<ProductsContainer/>
		</div>
	</Context.Provider>
)};


export default App;
