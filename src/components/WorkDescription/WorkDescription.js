import React from 'react'
import './WorkDescription.css'

function WorkDescription() {
	return (
		<div id="work-desc">
			<div className="container">
				<div style={{ display: 'block' }}>
					<div className="work-desc-wrapper">
						<div className="work-text">
							From "to", we "DO". We have prided ourselves by our work that not only move the needle, but
							because it helps move the gears of economy. Through our work, we do help fulfill the needs of
							our clients, of people. This is what we do, these are some of the work we have done.

						</div>
					</div>
					<div className="work-filter">
						<div className="work-filter-wrapper">
							<select className="form-control" name="capability" id="capability-focus-dropdown">
								<option value="" disabled="" selected="">Filter by Capability Focus</option>
								<option value=""> CX </option>
								<option value=""> Communications </option>
								<option value=""> Commerce </option>
								<option value="">All</option>
							</select>
						</div>
						<div className="work-filter-wrapper">
							<select className="form-control" name="services" id="services-dropdown">
								<option value="" disabled="" selected="">Filter by Services</option>
								<option value=""> Brand Strategy </option>
								<option value=""> Content Production </option>
								<option value=""> Media </option>
								<option value=""> Creative </option>
								<option value=""> Engagement </option>
								<option value=""> Ecommerce Marketing </option>
								<option value=""> Consulting </option>
								<option value=""> Analytics </option>
								<option value=""> Experience Design </option>
								<option value=""> Technology </option>
								<option value="">All</option>
							</select>
						</div>
					</div>
					<div className="related-work-tabs">

						<div className="related-work-ajax">
							<div className="related-work-holder">
								<a href="/">
									<div className="related-work-image">
										<div 
											className="bg-image"
											style={{ backgroundImage: "URL('./assets/images/Works/image_15.jpg')" }}
										></div>
									</div>
									<div className="related-work-desc-wrapper">
										<div className="related-work-title">PMFTC Appwards</div>
										<div className="related-work-tags">CX</div>
									</div>
								</a>
							</div>
							<div className="related-work-holder">
								<a href="/">
									<div className="related-work-image">
										<div 
											className="bg-image"
											style={{ backgroundImage: "URL('./assets/images/Works/image_17.png')" }}
										></div>
									</div>
									<div className="related-work-desc-wrapper">
										<div className="related-work-title">Ingat Angat</div>
										<div className="related-work-tags">CX</div>
									</div>
								</a>
							</div>
							<div className="related-work-holder">
								<a href="/">
									<div className="related-work-image">
										<div 
											className="bg-image"
											style={{ backgroundImage: "URL('./assets/images/Works/image_9.jpg')" }}
										></div>
									</div>
									<div className="related-work-desc-wrapper">
										<div className="related-work-title">Swift Meat E-tindahan</div>
										<div className="related-work-tags">Commerce</div>
									</div>
								</a>
							</div>
							<div className="related-work-holder">
								<a href="/">
									<div className="related-work-image">
										<div 
											className="bg-image"
											style={{ backgroundImage: "URL('./assets/images/Works/image_16.jpg')" }}
										></div>
									</div>
									<div className="related-work-desc-wrapper">
										<div className="related-work-title">Avida Live Ready</div>
										<div className="related-work-tags">Communications</div>
									</div>
								</a>
							</div>
						</div>
					</div>

					<div className="d-block" style={{ height: "100px" }}></div>

				</div>
			</div>
		</div>
	)
}

export default WorkDescription