import globalData from "./data/globalData"
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

function App() {
	return (
		<div className="App">
			<FloatingLogo name={globalData.floatingLoader.name} url={globalData.floatingLoader.url} image={globalData.floatingLoader.image} />
			<Navbar />
			<Menu />
			<HomeBanner />
			<Services />
			<CapabilityFocus />
			<ServicesList />
			<Work />
			<WorkDescription />
			<TechStack />
		</div>
	);
}

export default App;
