import React from 'react'
import './TechStack.css'

import techStackData from '../../data/techStackData.json'

function TechStack() {
	return (
		<div id="our-tech-stacks">
			<div className="our-tech-stacks-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6">
							<div className="our-tech-stacks-title">
								<img src="./assets/images/Our Tech Stack.png" alt="our-tech-stacks" />
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-6 col-lg-6">
							<div className="our-tech-stacks-inner">
								<div className="our-tech-stacks-bottom">
									<div className="our-tech-stacks-text">
										Our growing but curated catalogue of tools, subscriptions, and in-house enterprise
										make up why and how we can walk our talk in tech.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="our-tech-stacks-list">
						{
							techStackData.map((stack, index) => (
								<div className="our-tech-stack" key={ index }>
									<div className="our-tech-stack-inner">
										<img src={ stack.image } alt={ stack.label } />
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

export default TechStack