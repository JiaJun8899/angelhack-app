import React, { useState, useEffect } from "react";
import Modal from "../../components/modal";
import TreeHeading from "./tree-heading";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
	Button,
	Switch,
} from "@material-tailwind/react";
import { useLocation, useNavigate } from 'react-router-dom';

interface TreeProps {
	circlesArray: number[];
	header: string[];
	subHeader: string[];
}

const Tree: React.FC<TreeProps> = ({ circlesArray, header, subHeader }) => {
	let navigate = useNavigate();
	let location = useLocation();
	const rootUrl = window.location.origin;
	const routeChange = (newPath: string) => {
		const targetPath = rootUrl + '/' + newPath;
		if (targetPath === rootUrl + location.pathname) return; // Do nothing if already on the target path
		navigate(newPath);
	}
	const [currentRow, setCurrentRow] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [completedCircles, setCompletedCircles] = useState<boolean[][]>(
		Array.from({ length: circlesArray.length }, () =>
			new Array(3).fill(false)
		)
	);
	const [open, setOpen] = useState(1);
	const handleOpen = (value) => setOpen(open === value ? 0 : value);
	const [clickedCircle, setClickedCircle] = useState<{
		row: number;
		index: number;
	} | null>(null);
	const [clickedCircles, setClickedCircles] = useState<boolean[][]>(
		Array.from({ length: circlesArray.length }, () =>
			new Array(3).fill(false)
		)
	);
	const [allCompleted, setAllCompleted] = useState(false);
	const [isChinese, setIsChinese] = useState(false);

	const dummyDataEnglish = [
		{
			header: "Lesson on Scam 1",
			text: "Place Holder for a lesson page",
		},
		{
			header: "Lesson on Scam 2",
			text: "Place Holder for a lesson page",
		},
		{
			header: "Lesson on Scam 3",
			text: "Place Holder for a lesson page",
		},
		{
			header: "Lesson on Scam 4",
			text: "Place Holder for a lesson page",
		},
		{
			header: "Lesson on Scam 5",
			text: "Place Holder for a lesson page",
		},
		{
			header: "Lesson on Scam 6",
			text: "Place Holder for a lesson page",
		},
		{
			header: "Lesson on Scam 7",
			text: "Place Holder for a lesson page",
		},
		{
			header: "Lesson on Scam 8",
			text: "Place Holder for a lesson page",
		},
		{
			header: "Lesson on Scam 9",
			text: "Place Holder for a lesson page",
		},
		{
			header: "Lesson on Scam 10",
			text: "Place Holder for a lesson page",
		},
	];
	const dummyDataChinese = [
		{
			header: "骗局课程 1",
			text: "课程页面占位符",
		},
		{
			header: "骗局课程 2",
			text: "课程页面占位符",
		},
		{
			header: "骗局课程 3",
			text: "课程页面占位符",
		},
		{
			header: "骗局课程 4",
			text: "课程页面占位符",
		},
		{
			header: "骗局课程 5",
			text: "课程页面占位符",
		},
		{
			header: "骗局课程 6",
			text: "课程页面占位符",
		},
		{
			header: "骗局课程 7",
			text: "课程页面占位符",
		},
		{
			header: "骗局课程 8",
			text: "课程页面占位符",
		},
		{
			header: "骗局课程 9",
			text: "课程页面占位符",
		},
		{
			header: "骗局课程 10",
			text: "课程页面占位符",
		},
	];
	const dummyData = isChinese ? dummyDataChinese : dummyDataEnglish;
	const toggleLanguage = () => {
		setIsChinese((prev) => !prev);
	};
	const translations = {
		en: {
			finishModules: "Finish all modules for  $5 NTUC Voucher",
			congratulations: "Congratulations! Here is your reward!",
			clickForReward: "Click here for $5 NTUC Voucher",
		},
		zh: {
			finishModules: "完成所有模块以获得5美元的NTUC优惠券",
			congratulations: "恭喜你！这是你的奖励！",
			clickForReward: "点这里点击领取5美元的NTUC优惠券",
		},
	};

	const finishModulesText =
		translations[isChinese ? "zh" : "en"].finishModules;
	const congratulationsText =
		translations[isChinese ? "zh" : "en"].congratulations;
	const clickForRewardText =
		translations[isChinese ? "zh" : "en"].clickForReward;
	const handleCircleClick = (row: number, index: number) => {
		setClickedCircle({ row, index });
		setShowModal(true);

		setClickedCircles((prev) => {
			const newClickedCircles = prev.map((rowArr, rowIndex) =>
				rowArr.map((circle, circleIndex) =>
					rowIndex === row && circleIndex === index ? true : circle
				)
			);
			return newClickedCircles;
		});
	};

	const handleCloseModal = () => {
		setShowModal(false);
		if (clickedCircle) {
			setCompletedCircles((prev) => {
				const newCompletedCircles = prev.map((row, rowIndex) =>
					row.map((circle, circleIndex) =>
						rowIndex === clickedCircle.row &&
							circleIndex === clickedCircle.index
							? true
							: circle
					)
				);
				return newCompletedCircles;
			});
			if (clickedCircle.row === currentRow) {
				setCurrentRow(currentRow + 1);
			}
		}
		setClickedCircle(null);
	};
	useEffect(() => {
		const totalCircles = circlesArray.reduce((acc, num) => acc + num, 0);
		const completedCount = completedCircles.flat().filter(Boolean).length;
		setAllCompleted(completedCount === totalCircles);
	}, [clickedCircles, completedCircles, circlesArray]);

	return (
		<Accordion open={open === 1}>
			<AccordionHeader className="flex flex-col justify-center text-center bg-[#2196f3] text-white active:text-white rounded-2xl mt-6" onClick={() => handleOpen(1)}>
				<TreeHeading
					header={isChinese ? header[1] : header[0]}
					subHeader={isChinese ? subHeader[1] : subHeader[0]}
				/>
			</AccordionHeader>
			<AccordionBody>
				<div className="flex justify-end mb-4 px-8">
					<Switch
						className="bg-blue-500 text-white px-4 py-2 rounded"
						onClick={toggleLanguage}
						label={"中文"}
					></Switch>
				</div>
				<div className="flex flex-col items-center">
					{circlesArray.map((numCircles, rowIndex) => (
						<div key={rowIndex} className="flex justify-center">
							{Array.from({ length: numCircles }).map(
								(_, circleIndex) => (
									<div
										key={circleIndex}
										className={`w-16 h-16 rounded-full flex justify-center items-center cursor-pointer mx-3
                    ${completedCircles[rowIndex][circleIndex]
												? "bg-green-600 text-white font-bold text-xl"
												: clickedCircles[rowIndex][circleIndex]
													? "bg-green-300"
													: "bg-gray-300"
											}
                    ${clickedCircles[rowIndex][circleIndex]
												? "border-4 border-yellow-500"
												: ""
											}
                    ${rowIndex === circlesArray.length - 1 &&
												circleIndex === numCircles - 1
												? "mb-0"
												: "mb-5"
											}`}
										onClick={() =>
											handleCircleClick(rowIndex, circleIndex)
										}
									>
										{completedCircles[rowIndex][circleIndex] &&
											"✔"}
									</div>
								)
							)}
						</div>
					))}
					{showModal && clickedCircle && (
						<Modal
							onClose={handleCloseModal}
							header={
								dummyData[
									clickedCircle.row * 3 + clickedCircle.index
								].header
							}
							text={
								dummyData[
									clickedCircle.row * 3 + clickedCircle.index
								].text
							}
							open={showModal}
							isChinese={isChinese}
						/>
					)}
					<Button
						disabled={!allCompleted}
						className={`mt-5 mb-5 px-4 py-2 rounded ${allCompleted
							? "bg-blue-500 text-white"
							: "bg-gray-400 text-gray-700"
							}`}
						onClick={() => alert(congratulationsText)}
					>
						{allCompleted ? clickForRewardText : finishModulesText}
					</Button>
				</div>
			</AccordionBody>
		</Accordion>
	);
};

export default Tree;
