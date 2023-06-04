import { FC, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoutes: FC = () => {
	const [isLogged, setIsLogged] = useState(
		!!localStorage.getItem("@FantaF1Store:ACCESS_TOKEN")
	);

	useEffect(() => {
		const accessToken = localStorage.getItem("@FantaF1Store:ACCESS_TOKEN");
		const isLoggedIn = !!accessToken;
		setIsLogged(isLoggedIn);
	}, []);

	return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
