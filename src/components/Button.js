import '../styles/button.scss'

const Button = ({children, setClick, id}) => (
	<button className="button" id={id} onClick={({target}) => {setClick(target)}}>
		{children}
	</button>
);


export default Button;