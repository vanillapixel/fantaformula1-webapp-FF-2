import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateFantaTeam from "./pages/createFantaTeam";
import Login from "./pages/Login";
import Standings from "./pages/Standings";
import LiveStandings from "./pages/LiveStandings";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PrivateRoutes from "./utils/PrivateRoutes";

import "./app.scss";
import { BaseAPIManager } from "./services/model/BaseAPIManager";
import {
	reloadApiConfiguration,
	userJwtControllerApi,
} from "./services/apis/ApiConfiguration";
import { useState, useEffect } from "react";
import * as StorageHelper from "./helpers/StorageHelper";
import FantaTeamState from "./context/fantaTeam/state";

function App() {
	const darkTheme = createTheme({
		palette: {
			mode: "dark",
		},
	});

	//avvia l'ApiConfiguration-----------------------
	reloadApiConfiguration();
	//----------------------------------------------

	return (
		<div className="App">
			<FantaTeamState>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Router>
						<Navbar />
						<Routes>
							<Route element={<PrivateRoutes />}>
								<Route path="/" element={<Dashboard />} />
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/create_formation" element={<CreateFantaTeam />} />
								<Route path="/standings" element={<Standings />} />
								<Route path="/live_standings" element={<LiveStandings />} />
							</Route>
							<Route path="/login" element={<Login />} />
						</Routes>
					</Router>
				</ThemeProvider>
			</FantaTeamState>
		</div>
	);
}

export default App;
