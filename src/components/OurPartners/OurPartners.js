import React from 'react'
import './OurPartners.css'
import partnersData from '../../data/partnersData.json'

function OurPartners() {
	return (
		<div id="our-partners">
			<div className="our-partners-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6">
							<div className="our-partners-title">
								<img src="./assets//images/Our Partners.png" alt="our-partners" />
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-6 col-lg-6">
							<div className="our-partners-inner">
								<div className="our-partners-bottom">
									<div className="our-partners-text">
										As proud as we are of our people and capabilities, we are equally proud of the
										relationships we have forged with our partner clients. We work hard and smart at
										being their enthusiastic, abled partners.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="our-partners-list">

						{
							partnersData.map((partner, index) => (
								<div className="our-partner" key={ index }>
									<div className="our-partner-inner">
										<img src={ partner.image } alt={ partner.name } />
									</div>
								</div>
							))
						}

					</div>
				</div>
			</div>
		</div>
	)
}

export default OurPartners