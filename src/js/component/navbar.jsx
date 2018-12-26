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
						Login
					</button>
					<div
						className="modal"
						id="modalLoginForm"
						tabIndex="-1"
						role="dialog">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header text-center">
									<h4 className="modal-title w-100 font-weight-bold">
										Sign in
									</h4>
									<button
										type="button"
										className="close"
										data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>

								<div className="modal-body mx-3">
									<div className="md-form mb-5">
										<i className="fa fa-envelope prefix grey-text" />
										<input
											type="email"
											id="defaultForm-email"
											className="form-control validate"
										/>
										<label
											data-error="wrong"
											data-success="right"
											htmlFor="defaultForm-email">
											Your email
										</label>
									</div>

									<div className="md-form mb-4">
										<i className="fa fa-lock prefix grey-text" />
										<input
											type="password"
											id="defaultForm-pass"
											className="form-control validate"
										/>
										<label
											data-error="wrong"
											data-success="right"
											htmlFor="defaultForm-pass">
											Your password
										</label>
									</div>
								</div>

								<div className="modal-footer d-flex justify-content-center">
									<button className="btn btn-default">
										Login
									</button>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
