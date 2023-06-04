import Countdown from "../components/CountDown";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../Layout/Layout";
import Card from "../components/Card";

import "./dashboard.scss";

const HARDCODED_VALUES = {
	playerName: "Lorenzo Ferretti",
	teamName: "Scuderia Spicy",
	position: 7,
	points: 114,
	nextRace: {
		name: "GRAN PREMIO DE ESPAÑA 2023",
		raceStart: "2023-05-20T00:00:00Z",
		qualiStart: "2023-05-19T00:00:00Z",
		fp1Start: "2023-05-18T00:00:00Z",
	},
};
const Dashboard = () => {
	const {
		position,
		points,
		teamName,
		playerName,
		nextRace: { raceStart, name, fp1Start },
	} = HARDCODED_VALUES;

	const scoreCardItems = [
		{ label: "position", value: position.toString() },
		{ label: "points", value: points.toString() },
	];
	return (
		<Layout>
			<header className="dashboard-header">
				<h2>{playerName}</h2>
				<h3>{teamName}</h3>
			</header>
			<Link to="/standings">
				<Button>
					<Card items={scoreCardItems}></Card>
				</Button>
			</Link>
			<div className="next-race-card">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
					className="next-race-container"
				>
					<span>Next race in:</span>
					<h3>{name}</h3>
					<h4>
						{`${new Date(fp1Start).getDate()} /
						${new Date(raceStart).toLocaleDateString("it-IT", {
							day: "2-digit",
							month: "long",
							year: "numeric",
						})}`}
					</h4>
				</div>
			</div>
			<div className="next-race-card">
				<Countdown targetDate={new Date(raceStart)} />
			</div>
			<Link to="/create_formation">
				<Button>Crea formazione</Button>
			</Link>
		</Layout>
	);
};

export default Dashboard;
