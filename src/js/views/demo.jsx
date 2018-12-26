import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/demo.css";

export class Demo extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron bg-dark display-block">
					<h1 className="display-4 text-center text-white">
						The Meetup Clone
					</h1>
					<p className="lead text-center text-white">
						This is a mini-project created by{" "}
						<span className="D">4GeeksAcademy</span>
					</p>
					<p className="text-center text-white">
						Using ReactJS, Bootstrap, React-Router, HTML5,CSS3,JSON
					</p>
				</div>
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.events.map((item, index) => {
								return (
									<div key={index} className="container">
										<div className="dateformat d-block">
											{actions.convertDate(
												item.meta_keys.day
											)}
										</div>
										<div className="card">
											<div className="card-body">
												<div className="d-flex">
													<div className="A">
														{actions.convertTime(
															item.meta_keys.time
														)}
													</div>
													<div className="C">
														<Link
															to={
																"/single/" +
																index
															}>
															{item.post_title}
														</Link>
													</div>
												</div>
												<div className="d-flex">
													<div className="text-white">
														{item.meta_keys.time}
													</div>
													<div className="C">
														{actions.getMeetupName(
															item.meta_keys
																._meetup
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</ul>
			</div>
		);
	}
}
