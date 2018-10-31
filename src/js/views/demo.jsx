import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.data.map((item, index) => {
								return (
									<div key={index} className="container">
										<div className="card">
											<div className="card-body">
												<div className="d-flex mb-3">
													<div className="p-2">
														{item.meta_keys.time}
													</div>
													<div className="p-2">
														{item.post_title}
													</div>
												</div>

												<div className="d-flex mb-3">
													<div className="p-2 text-white">
														{item.meta_keys.time}
													</div>
													<div className="p-2">
														{item.post_content}
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
