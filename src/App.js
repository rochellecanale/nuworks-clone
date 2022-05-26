
import globalData from "./data/globalData"

/* Home Components */
import FloatingLogo from "./components/FloatingLogo/FloatingLogo";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Services from "./components/Services/Services";
import CapabilityFocus from "./components/CapabilityFocus/CapabilityFocus";
import ServicesList from "./components/ServicesList/ServicesList";
import Work from "./components/Work/Work";
import WorkDescription from "./components/WorkDescription/WorkDescription";
import TechStack from "./components/TechStack/TechStack";
import About from "./components/About/About";
import OurStory from "./components/OurStory/OurStory";
import OurValues from "./components/OurValues/OurValues";
import OurPartners from "./components/OurPartners/OurPartners";
import OurAwards from "./components/OurAwards/OurAwards";
import OurAffiliations from "./components/OurAffiliations/OurAffiliations";
import BraveWork from "./components/BraveWork/BraveWork";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<FloatingLogo name={ globalData.floatingLoader.name } url={ globalData.floatingLoader.url } image={ globalData.floatingLoader.image } />
			<Navbar />
			<Menu />
			<HomeBanner />
			<Services />
			<CapabilityFocus />
			<ServicesList />
			<Work />
			<WorkDescription />
			<TechStack />
			<About />
			<OurStory />
			<OurValues />
			<OurPartners />
			<OurAwards />
			<OurAffiliations />
			<BraveWork />
			<Footer />
		</div>
	);
}

export default App;
