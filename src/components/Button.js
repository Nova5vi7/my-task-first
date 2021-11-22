import {useCallback} from 'react';
import '../styles/button.scss'

const Button = ({children, setClick, id}) => {

	const hendlClick = useCallback(() => {
		setClick(id)
	}, [setClick, id])

	return (
		<button className="button" onClick={hendlClick}>
			{children}
		</button>
	)
};


export default Button;