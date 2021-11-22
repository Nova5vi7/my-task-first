import Product from "../components/Product";
import {useContext} from "react";
import Context from "../context/Context";

const ProductsWrap = () => {
	const {productsData} = useContext(Context);

	return (
		<div className="products-wrap">
		  {productsData.map((product, ind) => {
			 return (<Product productData={product} key={ind}/>)
		  })}
		</div>
	);
}
 
export default ProductsWrap;