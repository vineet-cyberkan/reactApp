import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<Home name={"Max"} initialAge={28} />
					</div>
				</div>
			</div>
		)
	}
}

render(<App/>, document.getElementById("mainComp") )