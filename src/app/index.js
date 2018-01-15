import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	render() {
		var user = {
			name: "Vine",
			hobbies:["Sports", "Reading"]
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						{/*<Home name={"Max"} age={28} user={user} />*/}
						<Home name={"Max"} age={28} user={user}>
							<p>this is children node text of html passing from one component to another component</p>
						</Home>
					</div>
				</div>
			</div>
		)
	}
}

render(<App/>, document.getElementById("mainComp") )