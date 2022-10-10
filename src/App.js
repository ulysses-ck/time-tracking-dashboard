import { createContext, useState } from "react";
import "./App.css";

import Container from "./components/Container";

export const Timeframe = createContext({
	timeframe: "",
	setTimeframe: () => {},
});

const App = () => {
	const [sTimeframe, setSTimeframe] = useState({
		timeframe: "Weekly",
		setTimeframe: (tr) => {
			setSTimeframe((prevState) => ({ ...prevState, timeframe: tr }));
		},
	});

	return (
		<div className="App">
			<Timeframe.Provider value={sTimeframe}>
				<Container></Container>
			</Timeframe.Provider>
		</div>
	);
};

export default App;
