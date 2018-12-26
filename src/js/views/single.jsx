import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/single.css";

var x = Math.floor(Math.random() * 6 + 1);
var imgSource2 =
	"http://www.logiconme.com/assets/img-temp/800x500/img" + x + ".jpg";
var imgSource = "https://picsum.photos/800/500/?random";

export class Single extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						let eventID = this.props.match.params.theid;
						return (
							<div className="jumbotron bg-dark display-block">
								<div className="row">
									<div className="col-9 text-white singletop">
										{actions.convertDate(
											store.events[eventID].meta_keys.day
										)}
										<br />
										{
											store.events[
												this.props.match.params.theid
											].post_title
										}
										<br />
										<Link to="/resumen/1">
											{actions.getMeetupName(
												store.events[eventID].meta_keys
													._meetup
											)}
										</Link>
									</div>
									<div className="col-2 bg-secondary rsvp">
										<div className="rsvp text-white text-center">
											people going
											<br />
											<button
												type="button"
												className="btn btn-primary">
												Login to RSVP
											</button>
											<br />
											<a
												href="#"
												className="fa fa-twitter"
											/>
											<a
												href="#"
												className="fa fa-facebook"
											/>
										</div>
									</div>
									<div className="bg-light container-fluid col-8">
										<img
											className="imgSingle"
											alt="responsive image"
											src={imgSource}
										/>
									</div>
									<div className="col-4 bg-light container-fluid">
										<ul>
											<li>Saturday, April 28,</li>
											<li>2018</li>
										</ul>
									</div>
									<div className="detail bg-light container-fluid">
										<h2 align="left">Details</h2>
										{
											store.events[
												this.props.match.params.theid
											].post_content
										}
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object
};
