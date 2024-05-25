import React, { useState, useRef } from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";
import helloSound from "../assets/helloSound.wav";

interface ModalProps {
	onClose: () => void;
	header: string;
	text: string;
	audioSrc: string;
	open: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, header, text, open }) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	function playSound() {
		if (isPlaying) {
			audioRef.current?.pause();
		} else {
			audioRef.current?.play();
		}
		setIsPlaying(!isPlaying);
	}
	return (
		<>
			<Dialog open={open} handler={onClose}>
				<DialogHeader>{header}</DialogHeader>
				<DialogBody>
					{text}
					<audio ref={audioRef} src={helloSound} />
					<Button
						onClick={playSound}
						color="blue"
						fullWidth
						className="mt-2 mb-2"
					>
						{isPlaying ? "Pause Audio" : "Play Hokkien"}
					</Button>
				</DialogBody>
				<DialogFooter>
					<Button
						variant="text"
						color="red"
						onClick={onClose}
						className="mr-1"
					>
						<span>Cancel</span>
					</Button>
					<Button variant="gradient" color="green" onClick={onClose}>
						<span>Confirm</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
};

export default Modal;
