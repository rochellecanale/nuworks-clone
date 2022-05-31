import React from 'react'
import './WorkDescription.css'
import useFetchData from '../../hooks/useFetchData'

function WorkDescription() {

	const { data } = useFetchData('https://my.api.mockaroo.com/our_works.json?key=e5c303d0')

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
								<option value="/" disabled="" defaultValue="CX">Filter by Capability Focus</option>
								<option value="CX"> CX </option>
								<option value="Communications"> Communications </option>
								<option value="Commerce"> Commerce </option>
								<option value="All">All</option>
							</select>
						</div>
						<div className="work-filter-wrapper">
							<select className="form-control" name="services" id="services-dropdown">
								<option value="" disabled="" defaultValue="">Filter by Services</option>
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

							{
								data && (
									data.map((work, index) => (

										work.image && work.title && work.tag ?
											<div className="related-work-holder" key={index}>
												<a href="/">
													<div className="related-work-image">
														<div
															className="bg-image"
															style={{ backgroundImage: `URL(${work.image})` }}
														></div>
													</div>
													<div className="related-work-desc-wrapper">
														<div className="related-work-title">{work.title}</div>
														<div className="related-work-tags">{work.tag}</div>
													</div>
												</a>
											</div>
											:
												null
									))
								)
							}

						</div>
					</div>

					<div className="d-block" style={{ height: "100px" }}></div>

				</div>
			</div>
		</div>
	)
}

export default WorkDescription