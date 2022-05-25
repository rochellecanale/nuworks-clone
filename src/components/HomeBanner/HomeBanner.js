import React from 'react'
import './HomeBanner.css'

import videoBanner from '../../data/videoBanner.json'

function HomeBanner() {
	return (
		<section id="homepage">
			<video playsInline autoPlay muted loop id="NW-video" className="d-none d-sm-none d-md-block d-lg-block">
				<source src={ videoBanner.main.source } />
					Your browser does not support HTML5 video.
			</video>
			<div className="d-block d-sm-block d-md-none d-lg-none">
				<video playsInline autoPlay muted loop id="NW-video">
					<source src={ videoBanner.launch.source } type="video/mp4" />
						Your browser does not support HTML5 video.
				</video>
			</div>
		</section>
	)
}

export default HomeBanner