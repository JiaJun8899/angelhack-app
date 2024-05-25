import React, { ReactNode } from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Navbar />
		</div>
	);
};

export default Layout;
