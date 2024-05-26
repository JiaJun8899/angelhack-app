import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import {
	Navbar
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
		<Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
			<div className="flex-1 text-center">FINGO</div>

			<div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
				<svg
					className="absolute w-12 h-12 text-gray-400 -left-1"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					onClick={() => routeChange("profile")}
				>
					<path
						fill-rule="evenodd"
						d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd"
					></path>
				</svg>
			</div>
		</Navbar>
	);
};

export default Header;
