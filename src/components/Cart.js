import {useContext} from "react";
import Context from "../context/Context";
import CartItem from "./CartItem";
import '../styles/cart.scss'


const Cart = () => {
	const {cartData} = useContext(Context);

	return (
	  <div className="cart">
		  <h3>Cart</h3>

		  {cartData.map((product, ind) => {
			  return (
				  <CartItem productData={product} key={ind}/>
			  )
		  })}
	  </div>
	);
 }
 
 export default Cart;