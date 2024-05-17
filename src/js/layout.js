import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "./component/herosection";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/dashboard.js";
import injectContext from "./store/appContext";
import { AiFeatures } from "./component/aifeatures";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Dashboard } from "./views/dashboard.js";
import { GetCredits } from "./views/getcredits.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			
			<BrowserRouter basename={basename}>
				
					<Navbar />
					{/* <Box />  */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/pricing" element={<GetCredits />} />
						<Route path="/dashboard" element={<Dashboard />} />

						<Route path="/single/:theid" element={<leftNavbar />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
