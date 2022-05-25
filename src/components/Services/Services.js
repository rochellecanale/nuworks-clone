import React from 'react'
import './Services.css'

function Services() {
	return (
		<div id="services-inner">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-6 col-lg-6">
						<div className="services-wrapper">
							<div className="middle">
								<div className="services-title">
									<img src="./assets/images/Service Philosophy.png" alt="service-philosophy" />
								</div>
								<div className="services-desc">
									NuWorks builds, operates, and deploys digital services
									to help brands and business scale in the digital economy. This is made possible through
									StoryTeching: the process by which we utilize our end-to-end digital capabilities in
									communication, commerce, and customer experience.
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-6 col-lg-6">
						<div className="services-image">
							<img src="./assets/images//philosophy.png" alt="philosophy" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services