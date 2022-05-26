import React from 'react'
import './OurAwards.css'
import awardsData from '../../data/awardsData.json'

function OurAwards() {
	return (
		<div id="our-awards">
			<div className="our-awards-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 d-none d-sm-none d-md-block d-lg-block">
							<div className="our-awards-inner">
								<div className="our-awards-bottom">
									<div className="our-awards-text text-right">
										Along the way, we have had the good fortune to win metal from some of the most
										respected and prestigious show in the industry — locally and internationally. These
										citations keep us humble and hungry.
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-6 col-lg-6">
							<div className="our-awards-title text-right">
								<img src="./assets/images/Our Awards.png" alt="our-awards" />
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-6 col-lg-6 d-block d-sm-block d-md-none d-lg-none">
							<div className="our-awards-inner">
								<div className="our-awards-bottom">
									<div className="our-awards-text text-right">
										Along the way, we have had the good fortune to win metal from some of the most
										respected and prestigious show in the industry — locally and internationally. These
										citations keep us humble and hungry.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="our-award-list">

						{
							awardsData.map((awards, index) => (
								<div className="our-award" key={ index }>
									<div className="our-award-inner">
										<img src={ awards.image } alt={ awards.name } />
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

export default OurAwards