import Button from "./Button";
import '../styles/product.scss'

const Product = ({productData, addToCart}) => {
	const {id, image, name, description, price, discount} = productData

	const priceData = Number.isInteger(price) ? `${price}.00$` : `${price}$`;
	const discountData = Number.isInteger(discount) ? `${discount}.00$` : `${discount}$`;


	return (
	  <div className="product">
		 <div className="product-image">
			 <img src={image} alt={`Product-${id}`}/>
		 </div>
		 <div className="product-name">{name}</div>
		 <div className="product-text">{description}</div>
		 <div className="product-price-wrap">
			<div className="product-price">{discount ? discountData : priceData}</div>
			<div className={`product-discount ${discount ? "visible" : 'hidden'}`}>{priceData}</div>
		 </div>
		 <div className="product-btn">
		 	<Button setClick={addToCart} id={id}>
				 Add to cart
			</Button>
		 </div>
	  </div>
	);
 }
 
 export default Product;