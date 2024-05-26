import React, { useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
	Tooltip,
	IconButton,
	Switch,
	Radio,
} from "@material-tailwind/react";

interface Question {
	question: string;
	options: string[];
	correctAnswer: number;
}

const englishQuestions: Question[] = [
	{
		question: "Lorem ipsum dolor sit amet?",
		options: ["Option 1", "Option 2", "Option 3", "Option 4"],
		correctAnswer: 0,
	},
	{
		question: "Consectetur adipiscing elit?",
		options: ["Option 1", "Option 2", "Option 3", "Option 4"],
		correctAnswer: 1,
	},
	{
		question: "Sed do eiusmod tempor incididunt?",
		options: ["Option 1", "Option 2", "Option 3", "Option 4"],
		correctAnswer: 2,
	},
	{
		question: "Ut labore et dolore magna aliqua?",
		options: ["Option 1", "Option 2", "Option 3", "Option 4"],
		correctAnswer: 3,
	},
	{
		question: "Ut enim ad minim veniam?",
		options: ["Option 1", "Option 2", "Option 3", "Option 4"],
		correctAnswer: 0,
	},
];

const chineseQuestions: Question[] = [
	{
		question: "这是第一个问题吗？",
		options: ["选项 1", "选项 2", "选项 3", "选项 4"],
		correctAnswer: 0,
	},
	{
		question: "这是第二个问题吗？",
		options: ["选项 1", "选项 2", "选项 3", "选项 4"],
		correctAnswer: 1,
	},
	{
		question: "这是第三个问题吗？",
		options: ["选项 1", "选项 2", "选项 3", "选项 4"],
		correctAnswer: 2,
	},
	{
		question: "这是第四个问题吗？",
		options: ["选项 1", "选项 2", "选项 3", "选项 4"],
		correctAnswer: 3,
	},
	{
		question: "这是第五个问题吗？",
		options: ["选项 1", "选项 2", "选项 3", "选项 4"],
		correctAnswer: 0,
	},
];

const Quiz: React.FC = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const [score, setScore] = useState(0);
	const [isEnglish, setIsEnglish] = useState(true);

	const handleOptionChange = (index: number) => {
		setSelectedOption(index);
	};

	const handleCheck = () => {
		if (selectedOption === null) return;

		const questions = isEnglish ? englishQuestions : chineseQuestions;

		if (selectedOption === questions[currentQuestion].correctAnswer) {
			setScore(score + 1);
		}

		setSelectedOption(null);
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			alert(
				`Quiz completed! Your score is ${
					score +
					(selectedOption === questions[currentQuestion].correctAnswer
						? 1
						: 0)
				} out of ${questions.length}`
			);
		}
	};

	const handleToggleLanguage = () => {
		setIsEnglish(!isEnglish);
		setCurrentQuestion(0);
		setSelectedOption(null);
		setScore(0);
	};

	const questions = isEnglish ? englishQuestions : chineseQuestions;

	return (
		<>
			<div className="flex items-center mb-2">
				<Typography variant="h1" color="blue-gray" className="mr-4">{isEnglish ? "Quiz" : "测验"}</Typography>
				<Switch
					onClick={handleToggleLanguage}
					label={"中文"}
				/>
			</div>
			<Card className="w-full max-w-[26rem] shadow-lg">
				<Typography variant="h5" color="blue-gray" className="mb-2">
					{questions[currentQuestion].question}
				</Typography>
				{questions[currentQuestion].options.map((option, index) => (
					<div
						key={index}
						className="flex items-center justify-between pb-3 pt-3 last:pb-0"
					>
						<label>
							<Radio
								type="radio"
								name="option"
								value={index}
								checked={selectedOption === index}
								onChange={() => handleOptionChange(index)}
							/>
							{option}
						</label>
					</div>
				))}
				<Button color="green" onClick={handleCheck}>
					{isEnglish ? "Check" : "检查"}
				</Button>
			</Card>
		</>
	);
};

export default Quiz;
