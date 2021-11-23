import {useState, useRef} from "react";
import CartWrap from "../components/CartWrap";
import '../styles/cart.scss'


const Cart = () => {
	const [openCart, toggleCart] = useState(false);
	const buttonCart = useRef(null);
	const cart = useRef(null);


	const showCart = () => {
		toggleCart(true);

		document.addEventListener('click', closeCart)
	}

	const closeCart = ({target}) => {
	
		if(cart.current.contains(target)) return;
		console.log(target)
		toggleCart(false)
		document.removeEventListener('click', closeCart)
	}

	return (
	  <CartWrap cart={cart} buttonCart={buttonCart} openCart={openCart} showCart={showCart}/>
	);
 }
 
 export default Cart;