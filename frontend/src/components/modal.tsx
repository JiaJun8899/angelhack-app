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
	isChinese: boolean;
}

const Modal: React.FC<ModalProps> = ({
	onClose,
	header,
	text,
	open,
	isChinese,
}) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const translations = {
		playButton: "播放音频",
		pauseButton: "暂停音频",
		cancelButton: "取消",
		confirmButton: "确认",
	};

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
						{isChinese
							? isPlaying
								? translations.pauseButton
								: translations.playButton
							: isPlaying
							? "Pause Hokkien"
							: "Play Hokkien"}
					</Button>
				</DialogBody>
				<DialogFooter>
					<Button
						variant="text"
						color="red"
						onClick={onClose}
						className="mr-1"
					>
						<span>
							{isChinese ? translations.cancelButton : "Cancel"}
						</span>
					</Button>
					<Button variant="gradient" color="green" onClick={onClose}>
						<span>
							{isChinese ? translations.confirmButton : "Confirm"}
						</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
};

export default Modal;
