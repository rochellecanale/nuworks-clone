import React from 'react'
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

function Home() {
  return (
	<>
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
	</>
  )
}

export default Home