import React from 'react'
import './Navbar.css'
import globalData from "../../data/globalData.json"

function Navbar() {

	const handleClick = (e) => {
		e.preventDefault();
		
		document.getElementById('menu').classList.add('open');

		if(window.innerWidth < 1024) {
			document.querySelector('body').style.overflow = 'hidden'
		}

	}

	return (
		<nav className="navbar">
			<div className="container-fluid">
				<a className="navbar-brand logo-show" href="/">
					<img 
						src={globalData.companyDetails.logo.image} 
						alt={globalData.companyDetails.logo.name} 
					/>
				</a>
				<div className="d-flex">
					<a href="/" onClick={handleClick} id="open-nav">
						<img src="./assets/images/Frame2.png" alt="hamburger-icon" />
					</a>
				</div>
			</div>
		</nav>

	)
}

export default Navbar