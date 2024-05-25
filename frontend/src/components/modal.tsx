import React from "react";
import { Button } from "@material-tailwind/react";

interface ModalProps {
	onClose: () => void;
	header: string;
	text: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, header, text }) => {
	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-10 rounded-lg text-center relative">
				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-black text-15"
				>
					X
				</button>
				<h2>{header}</h2>
				<p>{text}</p>
				<Button onClick={onClose} color="green" fullWidth>
					Done
				</Button>
			</div>
		</div>
	);
};

export default Modal;
