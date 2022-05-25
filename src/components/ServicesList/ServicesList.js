import React from 'react'
import './ServicesList.css'

function ServicesList() {
	return (
		<div id="list-of-services">
			<div className="list-of-services-wrapper">
				<div className="container">
					<div className="list-of-services-image">
						<img src="./assets//images/List of Services.png" alt="list-of-services" />
					</div>
					<div className="list-of-services-tabs">
						<select id="mySelect" className="form-control d-block d-sm-block d-md-none d-lg-none">
							<option>Brand Strategy</option>
							<option>Content Production</option>
							<option>Media</option>
							<option>Creative</option>
							<option>Engagement</option>
							<option>Ecommerce Marketing</option>
							<option>Consulting</option>
							<option>Analytics</option>
							<option>Experience Design</option>
							<option>Technology</option>
						</select>

						<ul className="nav nav-tabs d-none d-sm-none d-md-flex d-lg-flex" id="myTab" role="tablist">

							<li className="nav-item" role="presentation">
								<a href="/" className="nav-link active">Brand Strategy</a>
							</li>
							<li className="nav-item" role="presentation">
								<a href="/" className="nav-link">Content Production</a>
							</li>
							<li className="nav-item" role="presentation">
								<a href="/" className="nav-link">Media</a>
							</li>
							<li className="nav-item" role="presentation">
								<a href="/" className="nav-link">Creative</a>
							</li>
							<li className="nav-item" role="presentation">
								<a href="/" className="nav-link">Engagement</a>
							</li>
							<li className="nav-item" role="presentation">
								<a href="/" className="nav-link">Ecommerce Marketing</a>
							</li>
							<li className="nav-item" role="presentation">
								<a href="/" className="nav-link">Consulting</a>
							</li>
							<li className="nav-item" role="presentation">
								<a href="/" className="nav-link">Analytics</a>
							</li>
							<li className="nav-item" role="presentation">
								<a href="/" className="nav-link">Experience Design</a>
							</li>
							<li className="nav-item" role="presentation">
								<a href="/" className="nav-link">Technology</a>
							</li>
						</ul>

						<div className="tab-content" id="myTabContent">
							<div className="tab-pane fade show active" role="tabpanel">
								<div className="tab-title">
									/ Brand Strategy /
								</div>
								<div className="tab-items slick-initialized slick-slider slick-dotted">

									<div className="slick-list draggable" style={{ margin: "0 auto" }}>
										<div className="slick-track"
											style={{ opacity: 1, width: "1110px", transform: "translate3d('0px', '0px', '0px')" }}>

											<div className="card slick-slide slick-current slick-active" style={{ width: "350px" }}
												id="slick-slide00" aria-describedby="slick-slide-control00">
												<div className="card-body">
													<div className="card-image">
														<img src="./assets/images/Brands/Brand_Strategy_-_1_Situation_Analysis_and_Brand_Audit.svg"
															alt="Situation Analysis and Brand Audit" />
													</div>
													<div className="card-desc">
														<div className="card-inner-title">
															Situation Analysis and Brand Audit
														</div>
														<div className="card-inner-desc">
															We use audience-focused research methods to unearth customers'
															intent, sentiment, and context, thus informing brands on the
															most relevant behavioral insights. These insights are leveraged
															in creating dynamic, flexible, and engaging content and
															campaigns.
														</div>
													</div>
												</div>
											</div>
											<div className="card slick-slide slick-active" style={{ width: "350px" }}
												data-slick-index="1" aria-hidden="false" role="tabpanel"
												id="slick-slide01">
												<div className="card-body">
													<div className="card-image">
														<img src="./assets/images/Brands/Brand_Strategy_-_2_Brand_Comms_and_Content_Strategy.svg"
															alt="Brand Communications and Content Strategy" />
													</div>
													<div className="card-desc">
														<div className="card-inner-title">
															Brand Communications and Content Strategy
														</div>
														<div className="card-inner-desc">
															<p>We develop campaigns that deliver on short-term brand
																activations and long-term brand building. By creating
																targeted and personalised communications, we help brands
																execute creative experiences and impactful messaging across
																the stages of the marketing funnel.</p>
														</div>
													</div>
												</div>
											</div>
											<div className="card slick-slide slick-active" style={{ width: "350px" }}
												data-slick-index="2" aria-hidden="false" role="tabpanel"
												id="slick-slide02">
												<div className="card-body">
													<div className="card-image">
														<img src="./assets/images/Brands/Brand_Strategy_-_3_Full_Funnel_Strategy.svg"
															alt="Full Funnel, Multi-Channel Brand Experience Strategy" />
													</div>
													<div className="card-desc">
														<div className="card-inner-title">
															Full Funnel, Multi-Channel Brand Experience Strategy
														</div>
														<div className="card-inner-desc">
															<p>How brands decide on interacting with their audiences, across
																audiences, industries and touchpoints influences the
																customers' intent on interacting with the brand again. As
																communication strategy experts, we deliver on omni-channel
																experiences through content, campaigns and channel
																activations, experienced by consumers at every stage of
																their journey.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<ul className="slick-dots" role="tablist">
										<li className="slick-active" role="presentation"><button type="button" role="tab"
											id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 1"
											aria-selected="true">1</button></li>
									</ul>
								</div>

								<div className="related-work" style={{ display: "block" }}>
									<div className="related-work-wrapper">
										<div className="related-work-title" style={{ marginTop: "60px !important" }}>
											/ Related Work /
											<span>
												<a href="/">
													View all Works
												</a>
											</span>
										</div>
										<div className="related-work-tabs">

											<div className="related-work-holder">
												<a href="/">
													<div className="related-work-image">
														<div
															className="bg-image"
															style={{ backgroundImage: "URL('./assets/images/Works/image_16.jpg')" }}
														>
														</div>
													</div>
													<div className="related-work-desc-wrapper">
														<div className="related-work-title">
															Avida Live Ready
														</div>
														<div className="related-work-tags">
															Communications
														</div>
													</div>
												</a>
											</div>

											<div className="related-work-holder">
												<a href="/">
													<div className="related-work-image">
														<div
															className="bg-image"
															style={{ backgroundImage: "URL('./assets/images/Works/image_14.jpg')" }}
														>
														</div>
													</div>
													<div className="related-work-desc-wrapper">
														<div className="related-work-title">
															Burger King Jackpot Fries
														</div>
														<div className="related-work-tags">
															Communications
														</div>
													</div>
												</a>
											</div>

											<div className="related-work-holder">
												<a href="/">
													<div className="related-work-image">
														<div
															className="bg-image"
															style={{ backgroundImage: "URL('./assets/images/Works/image_10.jpg')" }}
														>
														</div>
													</div>
													<div className="related-work-desc-wrapper">
														<div className="related-work-title">
															Greenwich GBox
														</div>
														<div className="related-work-tags">
															CX
														</div>
													</div>
												</a>
											</div>

											<div className="related-work-holder">
												<a href="/">
													<div className="related-work-image">
														<div
															className="bg-image"
															style={{ backgroundImage: "URL('./assets/images/Works/image_11.png')" }}
														>
														</div>
													</div>
													<div className="related-work-desc-wrapper">
														<div className="related-work-title">
															Marlboro Ice Blast
														</div>
														<div className="related-work-tags">
															CX
														</div>
													</div>
												</a>
											</div>

										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default ServicesList