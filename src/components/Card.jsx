import React, { useContext } from "react";
import { Timeframe } from "../App";

import "./Card.css";
import Ellipsis from "./Ellipsis";

import { spacesByHyphen } from "../lib/utilities";

const Card = ({ title, timeframes }) => {
	const { timeframe } = useContext(Timeframe);
	const lower = timeframe.toLowerCase();

	return (
		<div className="card-container">
			<div
				className={`card-background bg-${spacesByHyphen(
					title.toLowerCase()
				)} bg-offset`}
			></div>
			<div className="card-body">
				<div className="card-title">
					<h3>{title}</h3>
					<Ellipsis></Ellipsis>
				</div>
				<div className="card-current">
					<p className="current-time-activity">
						{timeframes[lower].current}hrs
					</p>
					<p className="previous-time-activity">
						{timeframe === "Daily"
							? "Yesterday"
							: timeframe === "Weekly"
							? "Last Week"
							: "Last Month"}{" "}
						- {timeframes[lower].previous}hrs
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
