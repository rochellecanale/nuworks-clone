import React from 'react'
import './CapabilityFocus.css'

function CapabilityFocus() {
	return (
		<div id="capability-focus">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 d-none d-sm-none d-md-block d-lg-block">
						<div className="capability-image">
							<img src="./assets/images/capabilities.png" alt="capabilities" />
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-6 col-lg-6">
						<div className="capability-wrapper">
							<div className="middle">
								<div className="capability-title">
									<img src="./assets//images/Capability Focus.png" alt="capability-focus" />
								</div>
								<div className="capability-desc">

									<div className="mini-wrapper">
										<div className="mini-title">
											CX
										</div>

										<div className="mini-desc">We help brands hack the marketing funnel through
											insight-driven, intuitively designed customer experiences.
											We create impact by strategically aligning business goals to human-centric
											principles.</div>
									</div>

									<div className="mini-wrapper">
										<div className="mini-title">
											Communications
										</div>

										<div className="mini-desc">We create data-inspired messages that drive culture and
											technology.
											We produce highly engaging content to trigger brand love.
											We deploy brand-building solution to spur business growth.</div>
									</div>

									<div className="mini-wrapper">
										<div className="mini-title">
											Commerce
										</div>

										<div className="mini-desc">We help brands convert their digital presence to purchases
											through eCommerce consulting and precision marketing.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 d-block d-sm-block d-md-none d-lg-none">
						<div className="capability-image">
							<img src="./assets//images/capabilities.png" alt="capabilities" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CapabilityFocus