import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/single.css";

var x = Math.floor(Math.random() * 6 + 1);
var imgSource2 =
	"http://www.logiconme.com/assets/img-temp/800x500/img" + x + ".jpg";
var imgSource = "https://picsum.photos/800/500/?random";

export class Resumen extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron bg-dark display-block">
					<div className="row">
						<div className="bg-dark container-fluid col-8">
							<img
								className="imgSingle"
								alt="responsive image"
								src={imgSource}
							/>
						</div>
						<div className="col-4 bg-dark container-fluid">
							<ul>
								<li> </li>
								<li>2018</li>
							</ul>
						</div>
					</div>
				</div>
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
															"/resumen/" + index
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
														item.meta_keys._meetup
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
			</div>
		);
	}
}

Resumen.propTypes = {
	match: PropTypes.object
};
