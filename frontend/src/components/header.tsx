import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import {
	Avatar,
	Navbar,
	Typography
} from "@material-tailwind/react";
const Header: React.FC = () => {
	let navigate = useNavigate();
	let location = useLocation();
	const rootUrl = window.location.origin;
	const routeChange = (newPath: string) => {
		const targetPath = rootUrl + '/' + newPath;
		if (targetPath === rootUrl + location.pathname) return; // Do nothing if already on the target path
		navigate(newPath);
	}
	return (
		<Navbar className="fixed mt-auto z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
			<div className="grid grid-cols-3 text-center items-center">
				<div></div>
				<Typography className="place-self-center text-xl font-bold tracking-wide" color="black">
					FINGO
				</Typography>
				<Avatar className="place-self-end" src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" onClick={() => routeChange("profile")} />
			</div>
		</Navbar>
	);
};

export default Header;
