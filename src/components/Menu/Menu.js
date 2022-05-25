/* eslint-disable */
import React, { useEffect } from 'react'
import './Menu.css'

import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'
import TermsCondition from '../TermsCondition/TermsCondition'

import globalData from '../../data/globalData.json'


function Menu() {

	useEffect(() => {
		console.log('mounted!')
	})

	const handleClick = (e) => {
		e.preventDefault();
	}

	const toggleMenu = () => {
		document.getElementById('menu').classList.remove('open')
		if(window.innerWidth < 1024) {
			document.querySelector('body').style.overflow = 'unset'
		}
	}

	return (
		<div id="menu">
			<div className="menu-wrapper">
				<div className="menu-close">
					<div className="close" id="close-nav" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
						X
					</div>
				</div>
				<div className="menu-list">
					<div className="menu-inner">
						<ul>
							<li><a href="#services-inner">Our Services</a></li>
							<li><a href="#work">Our Work</a></li>
							<li><a href="#about">About nuworks</a></li>
							<li><a href="/join-the-team/">Be One of Us</a></li>
							<li><a href="/lets-connect/">Let's Connect</a></li>
						</ul>
					</div>
				</div>
				<div className="menu-footer">
					<div className="partners">
						<div className="google-partner">
							<a href="https://www.google.com/partners/agency?id=2893686766">
								<img src="./assets/images/image 5.png" alt="image 5" />
							</a>
						</div>
						<div className="facebook-partner">
							<a href="" onClick={handleClick}>
								<img src="./assets//images/Media - Facebook Partner 2.png"
									alt="Media - Facebook Partner 2" />
							</a>
						</div>
					</div>
					<div className="socmed">
						<SocialMediaLinks />
					</div>
					
					<TermsCondition />

				</div>
			</div>
		</div>
	)
}

export default Menu