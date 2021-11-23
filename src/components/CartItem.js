import {useContext} from "react";
import Context from "../context/Context";
import Button from "./Button";
import normalizeData from "../helpers/normalizeData";

const CartItem = ({productId}) => {
	const {productsData, removeFromCart} = useContext(Context);

	const productData = productsData.filter((product) => product.id === productId);

	const {id, image, name, description, price, discount} = productData[0];
	

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
			Remove from cart
		</Button>
	  </div>
	);
 }
 
 export default CartItem;