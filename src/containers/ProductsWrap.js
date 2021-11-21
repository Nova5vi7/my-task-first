import {useState, useContext, useEffect} from "react";
import getProducts from "../services/get-products";
import Product from "../components/Product";
import { Context } from "../Context";
import '../styles/products-wrap.scss'

const ProductsWrap = () => {
	const [cartData, setCartData] = useContext(Context);
	const [productsData, setProductsData] = useState([]);
	const [loading, setLoading] = useState(true);

	const getProductsData = async () => {
		const data = await getProducts();
		setLoading(false)
		setProductsData(data);
	}

	const addToCart = (target) => {
		const cart = [...cartData]
		productsData.map(product => {
			if(product.id === target.id && cart.includes(product)) {
				const ind = cart.indexOf(product)
				cart.splice(ind, 1)
				return product;
			};

			if(product.id === target.id) {
				cart.push(product)
				return product;
			}
		})

		
		setCartData(cart)
	}

	const logToConsole = () => {
		console.log(cartData)
	}
		
	useEffect(() => {
		getProductsData()
	}, [])

	if(loading) {
		return "Loading"
	}

	

	return (
	  <div className="products-wrap">
		  <button className='btn-console' onClick={() => {logToConsole()}}>ConsoleLog</button>
		 {productsData.map((product, ind) => {
			return (<Product productData={product} addToCart={addToCart} key={ind}/>)
		 })}
	  </div>
	);
}
 
export default ProductsWrap;