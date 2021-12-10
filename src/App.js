import React from "react";
import "./App.css";
import { withAuthenticator} from '@aws-amplify/ui-react';
import Crud from "./components/Crud";
import Header from "./components/Header";

const App = () => {					
		return (
			<div className="App">
			<Header />
			<Crud />
		  </div>
		);
	
}

export default withAuthenticator(App)
