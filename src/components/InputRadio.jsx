import React, { useContext } from "react";
import { Timeframe } from "../App";
import "./InputRadio.css";

const InputRadio = ({ name, isDefault }) => {
	const { setTimeframe } = useContext(Timeframe);

	const handleClick = (event) => {
		setTimeframe(event.target.value);
	};

	return (
		<div className="period">
			<input
				type="radio"
				onClick={handleClick}
				name="period"
				value={name}
				id={name}
				defaultChecked={isDefault}
			/>
			<label htmlFor={name}>{name}</label>
		</div>
	);
};

export default InputRadio;
