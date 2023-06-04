import Countdown from "../components/CountDown";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../Layout/Layout";
import Card from "../components/Card";
import { standings } from "../dummyData/standings";
import { playerDashboardData } from "../dummyData/playerDashboardData";

import "./dashboard.scss";

const Dashboard = () => {
	const {
		teamName,
		playerName,
		nextRace: { raceStart, name, fp1Start },
	} = playerDashboardData;

	const scoreCardItems = [
		{
			label: "position",
			value: `${standings.find((player) => player.name === playerName)?.pos}`,
		},
		{
			label: "points",
			value: `${standings.find((player) => player.name === playerName)?.score}`,
		},
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
