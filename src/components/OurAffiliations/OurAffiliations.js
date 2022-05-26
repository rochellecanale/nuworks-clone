import React from 'react'
import './OurAffiliations.css'

import affiliationData from '../../data/affiliationData.json'

function OurAffiliations() {
	return (
		<div id="our-affiliations">
			<div className="our-affiliations-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6">
							<div className="our-affiliations-title">
								<img src="./assets/images/Our Affiliations.png" alt="our-affiliations" />
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-6 col-lg-6">
							<div className="our-affiliations-inner">
								<div className="our-affiliations-bottom">
									<div className="our-affiliations-text">
										We belong to, are recognized by, and work with some of the most vital institutions
										and policy makers in tech and marketing.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="our-affiliation-list">

						{
							affiliationData.map((affiliation, index) => (
								<div className="our-affiliation" key={ index }>
									<div className="our-affiliation-inner google-partner">
										<img
											src={ affiliation.image }
											alt={ affiliation.name }
										/>
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

export default OurAffiliations