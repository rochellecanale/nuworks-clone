import React from 'react'
import './OurStory.css'

function OurStory() {
	return (
		<div id="our-story">
			<div className="our-story-wrapper">
				<div className="container">
					<div className="row">

						<div className="col-12 col-sm-12 col-md-12 col-lg-6 d-none d-sm-none d-md-block d-lg-block">
							<div className="our-story-video">
								<div className="middle" id="manifesto-video">
									<img src="./assets//images/Group 5816.png" alt="we-are-makers" />
								</div>
							</div>
						</div>

						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<div className="our-story-text">
								<div className="our-story-title">
									<img src="./assets//images/Our Story.png" alt="our-story" />
								</div>
								<div className="our-story-desc">
									NuWorks was founded in 2009, with the vision to provide meaningful human experiences to
									brands, consumers and the society. We developed and maintain a robust service portfolio
									with capabilities spanning the full spectrum of technology-driven marketing.
									<br /> <br />
									An independent agency since inception, we are fortunate to grow into one of the biggest
									full-suite advertising and innovations agencies in the Philippines. Here is how we got
									there.
								</div>
							</div>
						</div>

						<div className="col-12 col-sm-12 col-md-12 col-lg-6 d-block d-sm-block d-md-none d-lg-none">
							<div className="our-story-video">
								<div className="middle" id="manifesto-video-mobile">
									<img src="./assets//images//Group 5899.png" alt="we-are-makers" />
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default OurStory