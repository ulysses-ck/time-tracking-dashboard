import React, { useState, useEffect } from "react";
import "./Container.css";

import Card from "./Card";
import CardProfile from "./CardProfile";

import axios from "axios";
import { dataProfile } from "../lib/example-data";

const Container = () => {
	const [data, setData] = useState([]);

	const getData = () => {
		axios
			.get("./data.json")
			.then(function (response) {
				setData(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="container">
			<CardProfile {...dataProfile}></CardProfile>
			{data.data &&
				data.data.length > 0 &&
				data.data.map((element) => (
					<Card
						key={element.title}
						title={element.title}
						timeframes={element.timeframes}
					/>
				))}
		</div>
	);
};

export default Container;
