import React from "react";
import Tree from "./tree";

const Home: React.FC = () => {
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
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
                
			</div>
		</>
	);
};

export default Home;
