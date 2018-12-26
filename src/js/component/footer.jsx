import React, { Component } from "react";
import "../../styles/footer.css";

export class Footer extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
				<div className="B ml-auto display-block">
					<img
						src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-white.png"
						width="150"
						height="50"
						alt=""
					/>
				</div>
			</nav>
		);
	}
}
