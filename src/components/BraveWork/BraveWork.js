import React from 'react'
import './BraveWork.css'

function BraveWork() {
	return (
		<div id="brave-work">
			<div className="container">
				<div className="brave-work-wrapper">
					<img
						src="./assets/images/Group 5899.png"
						className="d-none -d-sm-none d-md-block d-lg-block"
						alt="brave-work" />
					<img
						src="./assets/images/Group 5816.png"
						className="d-block d-sm-block d-md-none d-lg-none"
						alt="be-one" />
					<div className="brave-work-buttons">
						<a href="/lets-connect/">
							<button>
								Let's Connect
								<span>How might we grow your business?</span>
							</button>
						</a>
						<a href="/join-the-team/">
							<button>
								Be One of Us
								<span>Submit your application.</span>
							</button>
						</a>

					</div>
				</div>
			</div>
		</div>
	)
}

export default BraveWork