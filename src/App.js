import React from "react";
import "./App.css";
import Crud from "./components/Crud";
import Header from "./components/Header";

class App extends React.Component {					
	
	render(){
		return (
			<div className="App">
			<Header />
			<Crud />
		  </div>
		);
	}
}

export default App