import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import globalData from "./data/globalData"

/* Common Components */
import FloatingLogo from "./components/FloatingLogo/FloatingLogo";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

/* Pages */
import Home from "./Home";
import TermsCondition from "./TermsCondition";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
	return (
		<Router>
			<div className="App">
				<FloatingLogo name={ globalData.floatingLoader.name } url={ globalData.floatingLoader.url } image={ globalData.floatingLoader.image } />
				<Navbar />
				<Menu />

				<div className="content">
					<Routes>
						<Route exact path="/" element={ <Home />} />
						<Route exact path="/terms-and-conditions" element={<TermsCondition />} />
						<Route exact path="/privacy-policy" element={ <PrivacyPolicy />} />   
					</Routes>
				</div>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
