
import './TechStack.css'
import useFetchData from '../../hooks/useFetchData'

function TechStack() {

	const schema = '/tech_stack.json'
	const { data } = useFetchData(`${ process.env.REACT_APP_API_BASE_URL }/${ schema }?key=${ process.env.REACT_APP_API_KEY}`)

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
							data && (
								data.map((stack, index) => (

									stack.image && stack.label ?
										<div className="our-tech-stack" key={ index }>
											<div className="our-tech-stack-inner">
												<img src={ stack.image } alt={ stack.label } />
											</div>
										</div>
									:
										null
								))
							)
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TechStack