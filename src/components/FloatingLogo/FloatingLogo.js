import './FloatingLogo.css'
import React from 'react'

function FloatingLogo(props) {
	const defaultValues = {
		url: "/",
		name: "loader-icon",
		image: "./assets/images/rotating-logo.gif"
	}

	const handleClick = () => {
		window.scrollTo(1000, 0);
	}

	return (
		<div onClick={handleClick} className="persistent-logo">
			<img src={props.image ? props.image : defaultValues.image } alt={props.name ? props.name : defaultValues.name} />
		</div>
	)
}

export default FloatingLogo