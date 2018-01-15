import React from "react";

import PropTypes from 'prop-types';

export class Home extends React.Component{
	render() {
		console.log(this.props);
		var text = "Sample text";
		return(
			<div>	
				<p>This is a test home component  </p>
				<p>{text}</p>
				<p>Your name is { this.props.name } and your age is { this.props.age }</p>
				<p>User Object => { this.props.user.name }</p>
				<div> <h2> hobbies </h2>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
					</ul>
				</div>
				<hr />
				{this.props.children}
			</div>
		)
	}
}

Home.propTypes = {
	name:PropTypes.string,
	age:PropTypes.number,
	user:PropTypes.object,
	children:PropTypes.element.isRequired
}