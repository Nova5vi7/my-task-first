import {useContext} from "react";
import Context from "../context/Context";
import Button from "./Button";
import normalizeData from "../helpers/normalizeData";

const CartItem = ({productData}) => {
	const {id, image, name, description, price, discount} = productData;
	const {removeFromCart} = useContext(Context);

	const priceData = normalizeData(price);
	const discountData = normalizeData(discount);

	return (
	  <div className="cart-item">
		<div className="cart-image">
			<img src={image} alt={`Product-${id}`}/>
		</div>
		<div className="cart-name">{name}</div>
		<div className="cart-text">{description}</div>
			<div className="cart-price-wrap">
			<div className="cart-price">{discount ? discountData : priceData}</div>
		</div>

		<Button setClick={removeFromCart} id={id}>
			Remove to cart
		</Button>
	  </div>
	);
 }
 
 export default CartItem;