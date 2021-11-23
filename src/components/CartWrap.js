import {useContext} from "react";
import Context from "../context/Context";
import CartItem from "./CartItem";

const Cart = ({buttonCart, openCart, showCart, cart}) => {
	const {cartData} = useContext(Context);

	return (
	  <div className="cart" ref={cart}>
		  <button className="cart-button" ref={buttonCart} onClick={showCart}>Cart</button>

		  	{
			  openCart && 
				<div className="cart-wrap">
					<div className="wrap">
						{cartData.map((productId, ind) => {
							return (
								<CartItem productId={productId} key={ind}/>
							)
						})}
					</div>
				</div>
		  	}
	  </div>
	);
 }
 
 export default Cart;