import Button from "./Button";
import {useContext} from "react";
import Context from "../context/Context";
import normalizeData from "../helpers/normalizeData";
import classNames from "classnames";
import '../styles/product.scss'

const Product = ({productData}) => {
	const {id, image, name, description, price, discount} = productData;
	const {cartData, addToCart, removeFromCart} = useContext(Context);

	const priceData = normalizeData(price);
	const discountData = normalizeData(discount);

	const classNameDiscount = classNames(['product-discount', {"visible": discount, "hidden": !discount}]);

	const productInCart = Boolean(cartData.find((product) => product.id === id));

	return (
	  <div className="product">
		 <div className="product-image">
			 <img src={image} alt={`Product-${id}`}/>
		 </div>
		 <div className="product-name">{name}</div>
		 <div className="product-text">{description}</div>
		 <div className="product-price-wrap">
			<div className="product-price">{discount ? discountData : priceData}</div>
			<div className={classNameDiscount}>{priceData}</div>
		 </div>
		 <div className="product-btn">
		 	{
				productInCart ? 
				(<Button setClick={removeFromCart} id={id}>
					Remove to cart
				</Button>) : (
				<Button setClick={addToCart} id={id}>
					Add to cart
				</Button>
				)
			}
		 </div>
	  </div>
	);
 }
 
 export default Product;