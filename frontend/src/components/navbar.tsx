import React, { useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faUser, faGift, faFeed } from '@fortawesome/free-solid-svg-icons'

const Navbar: React.FC = () => {
    let navigate = useNavigate(); 
    let location = useLocation();
    const rootUrl = window.location.origin;
    const routeChange = (newPath: string) => {
        const targetPath = rootUrl + '/' + newPath;
        if (targetPath === rootUrl + location.pathname) return; // Do nothing if already on the target path
        navigate(newPath);
    }
    
    return (
        <div className="fixed z-50 w-[92%] h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group" onClick={() => routeChange("home")}>
                    <FontAwesomeIcon icon={faHome} size="xs" />
                </button>
                <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" onClick={() => routeChange("explore")}>
                    <FontAwesomeIcon icon={faSearch} size="xs" />
                </button>
                <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" onClick={() => routeChange("profile")}>
                    <FontAwesomeIcon icon={faUser} size="xs" />
                </button>
                <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" onClick={() => routeChange("rewards")}>
                    <FontAwesomeIcon icon={faGift} size="xs" />
                </button>
                <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group" onClick={() => routeChange("feed")}>
                    <FontAwesomeIcon icon={faFeed} size="xs" />
                </button>
            </div>
        </div>
    )
}

export default Navbar;
