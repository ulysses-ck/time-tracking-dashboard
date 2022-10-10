import React from "react";

import "./CardProfile.css";
import "./Card.css";
import InputRadio from "./InputRadio";

const CardProfile = ({ name, avatar }) => {
	return (
		<div className="card-profile-container card-size">
			<div className="card-profile">
				<div className="card-profile-img">
					<img src={avatar} alt="People" />
				</div>
				<div className="card-profile-title">
					<p>Report for</p>
					<h1>{name}</h1>
				</div>
			</div>
			<div className="card-list-activities">
				<InputRadio name="Daily" isDefault={false} />
				<InputRadio name="Weekly" isDefault={true} />
				<InputRadio name="Monthly" isDefault={false} />
			</div>
		</div>
	);
};

export default CardProfile;
