
import globalData from "./data/globalData"

/* Common Components */
import FloatingLogo from "./components/FloatingLogo/FloatingLogo";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

/* Routes/Pages */
import Home from "./Home";

function App() {
	return (
		<div className="App">
			<FloatingLogo name={ globalData.floatingLoader.name } url={ globalData.floatingLoader.url } image={ globalData.floatingLoader.image } />
			<Navbar />
			<Menu />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
