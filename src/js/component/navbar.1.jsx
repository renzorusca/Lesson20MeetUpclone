import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-dark">
					<a className="navbar-brand text-white" href="#">
						<img
							src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-white.png"
							width="150"
							height="50"
							alt=""
						/>
					</a>

					<button type="button" className="btn btn-primary ml-auto">
						<Link className="text-white" to="/login">
							LOGINs
						</Link>
					</button>
				</nav>
			</div>
		);
	}
}
