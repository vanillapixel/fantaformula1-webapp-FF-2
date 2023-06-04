import { CSSProperties } from "react";
import { playerTeamsColors } from "../dummyData/playerTeamsColors";
import { liveStandings } from "../dummyData/standings";
import Layout from "../Layout/Layout";

import "./liveStandings.scss";

interface StandingsRow {
	pos: number;
	name: string;
	team: string;
	score: number;
	[key: string]: number | string;
}

interface PlayerCardProps {
	player: {
		name: string;
		score: number;
		team: string;
	};
	idx: number;
}

const HARDCODED_VALUES = {
	playerName: "Lorenzo Ferretti",
	teamName: "Scuderia Spicy",
	nextRace: {
		name: "GRAN PREMIO DE ESPAÑA 2023",
		raceStart: "2023-04-20T00:00:00Z",
		qualiStart: "2023-04-19T00:00:00Z",
		fp1Start: "2023-04-18T00:00:00Z",
	},
};

const now = new Date();
const minutes = now.getMinutes();
const roundedMinutes = Math.floor(minutes / 5) * 5;
const roundedTime = new Date(
	now.getFullYear(),
	now.getMonth(),
	now.getDate(),
	now.getHours(),
	roundedMinutes
);
const hours = roundedTime.getHours();
const formattedHours = hours < 10 ? `0${hours}` : hours;
const formattedMinutes =
	roundedTime.getMinutes() < 10
		? `0${roundedTime.getMinutes()}`
		: roundedTime.getMinutes();
const formattedTime = `${formattedHours}:${formattedMinutes}`;

function PlayerCard({ player, idx }: PlayerCardProps) {
	return (
		<div
			className="player-card"
			style={
				{
					"--player-team-bg-color":
						playerTeamsColors[player.team as keyof typeof playerTeamsColors]
							.bgColor,
					"--player-team-color":
						playerTeamsColors[player.team as keyof typeof playerTeamsColors]
							.color,
				} as CSSProperties
			}
		>
			<p className="grid-text">{idx + 1}</p>
			<div className="grid-line"></div>
			<div className="grid-details">
				<div className="player-name">{player.name}</div>
			</div>
			<p className="grid-text">{player.score} pt</p>
		</div>
	);
}

function LiveStandings() {
	const rows = [];

	for (let i = 0; i < liveStandings.length; i += 3) {
		const row = [];

		for (let j = i; j < i + 3; j++) {
			if (j >= liveStandings.length) {
				break;
			}

			row.push(
				<PlayerCard
					player={liveStandings[j]}
					idx={j}
					key={`player-card-${j}`}
				/>
			);
		}

		rows.push(
			<div className="player-card-row" key={`player-card-row-${i}`}>
				{row}
			</div>
		);
	}

	return (
		<Layout>
			<p className="last-update">
				Last update
				<h3>{formattedTime}</h3>
			</p>
			<div className="live-standings-container">{rows}</div>
		</Layout>
	);
}

export default LiveStandings;
