import React from "react";
import Tree from "./tree";

const Home: React.FC = () => {
	const treeData = [
		{
			circlesArray: [1, 3, 2, 1],
			header: ["Unit 1", "单元 1"],
			subHeader: ["Foundations of Scam", "诈骗基础"],
		},
		{
			circlesArray: [1, 2, 1],
			header: ["Unit 2", "单元 2"],
			subHeader: ["Advanced Scams", "高级诈骗"],
		},
		{
			circlesArray: [2, 2, 2, 1],
			header: ["Unit 3", "单元 3"],
			subHeader: ["Scam Tactics", "诈骗策略"],
		},
		{
			circlesArray: [1, 1, 1, 1, 1],
			header: ["Unit 4", "单元 4"],
			subHeader: ["Scam Prevention", "诈骗预防"],
		},
	];
	// w-[90%] mt-6 mx-auto text-center
	return (
		<div className="flex flex-col w-[90%] mx-auto mb-24">
			{treeData.map((data, index) => (
				<Tree
					key={index}
					circlesArray={data.circlesArray}
					header={data.header}
					subHeader={data.subHeader}
				/>
			))}
		</div>
	);
};

export default Home;
