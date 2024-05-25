import React from "react";
import Tree from "./tree";
import Navbar from "../../components/navbar";
import Header from "../../components/header";

const Home: React.FC = () => {
	return (
		<>
			<Tree
				circlesArray={[1, 3, 2, 1]}
				header="Unit 1"
				subHeader="Foundations of Scam"
			/>
			<Tree
				circlesArray={[1, 2, 1]}
				header="Unit 2"
				subHeader="Advanced Scams"
			/>
		</>
	);
};

export default Home;
