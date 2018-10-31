import React from "react";

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-white">
					<a className="navbar-brand" href="#">
						Meetup
					</a>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Log in{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Sign up
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div className="jumbotron bg-danger">
					<h1 className="display-3 text-center text-white">
						Find a Meetup
					</h1>
					<p className="lead text-center text-white">
						We will help you find the right people to make it
						happen.
					</p>
				</div>
			</div>
		);
	}
}
