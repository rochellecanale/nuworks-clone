import React from 'react'
import globalData from '../../data/globalData.json'

function SocialMediaLinks() {
	return (
		<div className="socmed">
			<ul>
				{
					globalData.companyDetails.socialMediaLinks.map((socmed, index) => (
						<li key={index}>
							<a href={socmed.url}>
								<img src={socmed.img} alt={socmed.label} />
							</a>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default SocialMediaLinks