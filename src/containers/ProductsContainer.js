import {useState, useContext, useEffect} from "react";
import getProducts from "../services/get-products";
import ProductsWrap from "../components/ProductsWrap";
import Context from "../context/Context";
import '../styles/products-wrap.scss'

const ProductsContainer = () => {
	const {setProductsData} = useContext(Context);
	const [loading, setLoading] = useState(true);
		
	useEffect(() => {
		const getProductsData = async () => {
			const data = await getProducts();
			setLoading(false)
			setProductsData(data);
		}

		getProductsData()

	}, [setProductsData]);

	if(loading) {
		return "Loading"
	}

	return (
		<ProductsWrap/>
	);
}
 
export default ProductsContainer;