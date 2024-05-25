import React, { useState, useRef } from "react";
import { Button } from "@material-tailwind/react";
import helloSound from "../assets/helloSound.wav";

interface ModalProps {
	onClose: () => void;
	header: string;
	text: string;
	audioSrc: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, header, text }) => {
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
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white p-10 rounded-lg text-center relative">
				<Button
					onClick={onClose}
					className="absolute top-3 right-3 text-black text-45"
                    color = "red"
				>
					X
				</Button>
                
				<h1><b>{header}</b></h1>
				<p>{text}</p>
				<audio ref={audioRef} src={helloSound} />
				<Button onClick={playSound} color="blue" fullWidth className="mt-2 mb-2">
					{isPlaying ? "Pause Audio" : "Play Hokkien"}
				</Button>
				<Button onClick={onClose} color="green" fullWidth>
					Done
				</Button>
			</div>
		</div>
	);
};

export default Modal;
