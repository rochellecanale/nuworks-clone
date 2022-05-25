import React from 'react'
import './Footer.css'
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'
import TermsCondition from '../TermsCondition/TermsCondition'

function Footer() {
	return (
		<div className="footer">
			<div className="footer-wrapper">
				<div className="container">
					<div className="footer-inner">
						<div className="d-none d-sm-none d-md-none d-lg-block desktop">
							<div className="row">
								<div className="col-12 col-sm-12 col-md-12 col-lg-5">
									<div className="copyright">
										Copyright 2021. NuWorks Interactive Labs, Inc. All rights reserved
									</div>
								</div>
								<div className="col-12 col-sm-12 col-md-12 col-lg-7">
									<div className="text-right">
										<TermsCondition />
										<SocialMediaLinks />
									</div>
								</div>
							</div>
						</div>
						<div className="d-block d-sm-block d-md-block d-lg-none mobile">
							<SocialMediaLinks />
							<TermsCondition />
							<div className="copyright">
								Copyright 2021. NuWorks Interactive Labs, Inc. All rights reserved
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer