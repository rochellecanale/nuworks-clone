import React from 'react'
import { Link } from 'react-router-dom'

function TermsCondition() {
	return (
		<div className="tnc-pp">
			<Link to="/terms-and-conditions">Terms and Conditions</Link>
			&nbsp; | &nbsp;
			<Link to="/privacy-policy">Privacy Policy</Link>
		</div>
	)
}

export default TermsCondition