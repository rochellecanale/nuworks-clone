import './FloatingLogo.css'
import React from 'react'

function FloatingLogo(props) {
	const defaultValues = {
		url: "/",
		name: "loader-icon",
		image: "./assets/images/rotating-logo.gif"
	}
	return (
		<div className="persistent-logo">
			<a href={props.url ? props.url : defaultValues.url }>
				<img src={props.image ? props.image : defaultValues.image } alt={props.name ? props.name : defaultValues.name} />
			</a>
		</div>
	)
}

export default FloatingLogo