import { standings } from "../dummyData/standings";
import Layout from "../Layout/Layout";

import "./dashboard.scss";

interface StandingsRow {
	pos: number;
	name: string;
	team: string;
	score: number;
	[key: string]: number | string;
}

const Standings = () => {
	return (
		<Layout>
			<table>
				<thead>
					<tr>
						{Object.keys(standings[0]).map((cell, idx) => (
							<th key={idx}>{cell}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{standings.map((row: StandingsRow) => (
						<tr>
							{Object.keys(row).map((cell) => (
								<td>{row[cell]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</Layout>
	);
};

export default Standings;
