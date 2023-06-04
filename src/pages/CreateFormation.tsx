import { useMemo, useState, CSSProperties } from "react";

import { bahrain } from "../dummyData/gpData";
import { teamsColors } from "./../dummyData/teamsColors";
import "./createFormation.scss";
import Layout from "./../Layout/Layout";
import { formationResourceApi } from "../services/apis/ApiConfiguration";
import Button from "./../components/Button";
import {
	FormationDrsEnum,
	FormationFormationTypeEnum,
} from "../services/apis/generated";

interface DriverType {
	id: number;
	firstname: string;
	lastname: string;
	team: string;
	cost: number;
}
interface TeamType {
	id: number;
	name: string;
	cost: number;
}
interface DataType {
	drivers: {
		id: number;
		team: string;
		firstname: string;
		lastname: string;
		cost: number;
		score: number;
	}[];
	teams: {
		id: number;
		name: string;
		cost: number;
		score: number;
	}[];
	budgetAllowance: number;
}

const SELECTED_DRIVERS_LIMIT: number = 6;
const SELECTED_TEAMS_LIMIT: number = 3;
const OVERBUDGET_ALLOWANCE: number = 20;

function CreateFormation() {
	const { budgetAllowance, drivers, teams }: DataType = bahrain;

	// Selected driver IDs are stored in an array of numbers
	const [selectedDriversIDs, setSelectedDriversIDs] = useState<number[]>([]);
	const [selectedTeamsIDs, setSelectedTeamsIDs] = useState<number[]>([]);
	const [isDriversTableCollapsed, setIsDriversTableCollapsed] =
		useState<boolean>(false);
	const [isTeamsTableCollapsed, setIsTeamsTableCollapsed] =
		useState<boolean>(false);
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);

	const selectedDrivers = drivers.filter((driver) =>
		selectedDriversIDs.includes(driver.id)
	);
	const selectedTeams = teams.filter((team) =>
		selectedTeamsIDs.includes(team.id)
	);
	const currentBudget: number = useMemo(
		() =>
			parseFloat(
				selectedDrivers
					.reduce(
						(accumulator, selectedDriver) => accumulator + selectedDriver.cost,
						0
					)
					.toFixed(2)
			) +
			parseFloat(
				selectedTeams
					.reduce(
						(accumulator, selectedTeam) => accumulator + selectedTeam.cost,
						0
					)
					.toFixed(2)
			),
		[selectedDrivers, selectedTeams]
	);

	const driversTableHeaderTabs: string[] = ["", "driver", "cost", "select"];
	const teamsTableHeaderTabs: string[] = ["team", "cost", "select"];

	const selectDriver = (id: number) => {
		const selectedDriver = drivers.find((driver) => driver.id === id);
		if (selectedDriversIDs.includes(id)) {
			// If the driver is already selected, remove it from the list
			setSelectedDriversIDs(
				selectedDriversIDs.filter((driverId) => driverId !== id)
			);
		} else {
			// If the driver is not selected, add it to the list
			if (
				selectedDriversIDs.length < SELECTED_DRIVERS_LIMIT &&
				currentBudget + (selectedDriver?.cost || 0) <=
					budgetAllowance + OVERBUDGET_ALLOWANCE
			) {
				setSelectedDriversIDs([...selectedDriversIDs, id]);
			}
		}
	};

	const selectTeam = (id: number) => {
		const selectedTeam = teams.find((team) => team.id === id);
		if (selectedTeamsIDs.includes(id)) {
			// If the team is already selected, remove it from the list
			setSelectedTeamsIDs(selectedTeamsIDs.filter((teamId) => teamId !== id));
		} else {
			// If the team is not selected, add it to the list
			if (
				selectedTeamsIDs.length < SELECTED_TEAMS_LIMIT &&
				currentBudget + (selectedTeam?.cost || 0) <=
					budgetAllowance + OVERBUDGET_ALLOWANCE
			) {
				setSelectedTeamsIDs([...selectedTeamsIDs, id]);
			}
		}
	};

	const sendFormation = () => {
		formationResourceApi.createFormation({
			formation: {
				drs: FormationDrsEnum.Disactive,
				formationType: FormationFormationTypeEnum.Race,
			},
		});
	};

	const collapseTable = (e: any) => {
		switch (e.currentTarget.getAttribute("data-table-id")) {
			case "drivers-table":
				setIsDriversTableCollapsed(!isDriversTableCollapsed);
				break;

			case "teams-table":
				setIsTeamsTableCollapsed(!isTeamsTableCollapsed);
				break;
		}
	};

	const toggleOpenBottomSheet = () => {
		setIsBottomSheetOpen(!isBottomSheetOpen);
	};

	return (
		<Layout>
			<div className="create-formation-page">
				<div>
					<div className="budget-info">
						<p className="current-budget">
							Drivers
							{`${selectedDriversIDs.length} / ${SELECTED_DRIVERS_LIMIT}`}
						</p>
						<p className="current-budget">
							Teams
							{`${selectedTeamsIDs.length} / ${SELECTED_TEAMS_LIMIT}`}
						</p>
						<h2 className="current-budget">{currentBudget}</h2>
					</div>

					{/* DRIVERS TABLE */}

					<h3 onClick={collapseTable} data-table-id="drivers-table">
						Pick your drivers
					</h3>

					<table
						id="drivers-table"
						className="create-formation-table drivers-list"
						style={{ maxHeight: isDriversTableCollapsed ? "0px" : "400px" }}
					>
						<thead>
							<tr>
								{driversTableHeaderTabs.map((headerTab) => (
									<th key={headerTab}>{headerTab}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{drivers.map(
								({ id, firstname, lastname, team, cost }: DriverType) => (
									<tr
										className={`driver-row 
									${selectedDriversIDs.includes(id) ? "is-selected" : ""}
									${
										currentBudget + cost >=
											budgetAllowance + OVERBUDGET_ALLOWANCE ||
										selectedDriversIDs.length === SELECTED_DRIVERS_LIMIT
											? "is-disabled"
											: ""
									}
									`}
										key={id}
										onClick={() => selectDriver(id)}
									>
										<td className="driver-image">
											<div
												style={
													{
														"--team-color":
															teamsColors[
																team.replace(
																	" ",
																	"_"
																) as keyof typeof teamsColors
															],
													} as CSSProperties
												}
												className="driver-name-image-container"
											>
												<div className="driver-img-container">
													<img
														src={`../assets/img/drivers/${firstname}-${lastname
															.toLocaleLowerCase()
															.replace(" ", "-")}.png`}
														alt={`${firstname} ${lastname}`}
														className="driver-img"
													/>
												</div>
											</div>
										</td>
										<td>
											<div className="driver-name-container">
												<div className="driver-firstname">{firstname}</div>
												<div className="driver-lastname">{lastname}</div>
											</div>
										</td>
										<td className="driver-cost">{cost}</td>
										<td className="driver-action">
											{selectedDriversIDs.includes(id) ? "X" : "O"}
										</td>
									</tr>
								)
							)}
						</tbody>
					</table>

					{/* TEAMS TABLE */}

					<h3 onClick={collapseTable} data-table-id="teams-table">
						Pick your teams
					</h3>

					<table
						id="teams-table"
						className="create-formation-table teams-list"
						style={{ maxHeight: isTeamsTableCollapsed ? "0px" : "400px" }}
					>
						<thead>
							<tr>
								{teamsTableHeaderTabs.map((headerTab) => (
									<th key={headerTab}>{headerTab}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{teams.map(({ id, name, cost }: TeamType) => (
								<tr
									className={`driver-row 
									${selectedTeamsIDs.includes(id) ? "is-selected" : ""}
									${selectedTeamsIDs.length === SELECTED_TEAMS_LIMIT ? "is-disabled" : ""}
									${
										currentBudget + cost >=
										budgetAllowance + OVERBUDGET_ALLOWANCE
											? "is-disabled"
											: ""
									}
									`}
									key={id}
									onClick={() => selectTeam(id)}
								>
									<td className="driver-image">
										<div
											style={
												{
													"--team-color":
														teamsColors[
															name.replace(" ", "_") as keyof typeof teamsColors
														],
												} as CSSProperties
											}
											className="driver-name-image-container"
										>
											<div className="driver-img-container">
												<img
													src={`../assets/img/teams/chassis/${name
														.toLocaleLowerCase()
														.replace(" ", "-")}.png`}
													alt={`${name}`}
													className="team-img"
												/>
											</div>
											<div className="team-name">{name}</div>
										</div>
									</td>
									<td
										style={
											{
												"--short-value": `${currentBudget - budgetAllowance}`,
											} as CSSProperties
										}
										className="team-cost"
									>
										{cost}
									</td>
									<td className="team-action">
										{selectedTeamsIDs.includes(id) ? "X" : "O"}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* SELECTION SUMMARIZE */}
				<div
					style={{ maxHeight: isBottomSheetOpen ? "300px" : "50px" }}
					className="bottom-sheet"
				>
					{/* SAVE FORMATION BUTTON */}
					<div
						className="show-bottom-sheet-btn"
						onClick={() => toggleOpenBottomSheet()}
					>
						{!isBottomSheetOpen ? "+" : "-"}
					</div>
					<div className="budget-bar">
						<div
							className="budget-limit-segment"
							style={
								{
									"--segment-width": `${Math.floor(
										(budgetAllowance * 100) /
											(budgetAllowance + OVERBUDGET_ALLOWANCE)
									)}%`,
								} as CSSProperties
							}
						>
							<p className="budget-allowance-label">
								{`${Math.min(
									currentBudget,
									budgetAllowance
								)} / ${budgetAllowance}`}
							</p>
							<div
								className="current-budget-segment"
								style={
									{
										"--segment-width": `${Math.floor(
											(currentBudget * 100) / budgetAllowance
										)}%`,
									} as CSSProperties
								}
							></div>
						</div>
						<div
							className="overbudget-segment"
							style={
								{
									"--segment-width": `${Math.floor(
										(OVERBUDGET_ALLOWANCE * 100) /
											(budgetAllowance + OVERBUDGET_ALLOWANCE)
									)}%`,
								} as CSSProperties
							}
						>
							<p
								className="budget-allowance-label"
								style={
									{
										"--budget-label-color":
											currentBudget > budgetAllowance ? "orange" : "white",
									} as CSSProperties
								}
							>
								{`${Math.abs(
									Math.min(
										0,
										parseFloat((budgetAllowance - currentBudget).toFixed(1))
									)
								)} / ${OVERBUDGET_ALLOWANCE}`}
							</p>
						</div>
					</div>
					<div className="selected-formation-container">
						<div className="selected-drivers-container">
							<div className="selected-drivers-bar">
								{[
									...selectedDrivers,
									...Array.from({
										length: SELECTED_DRIVERS_LIMIT - selectedDriversIDs.length,
									}),
								].map((selectedDriver, idx) => {
									if (
										typeof selectedDriver === "object" &&
										selectedDriver !== null &&
										selectedDriver !== undefined &&
										"firstname" in selectedDriver &&
										"lastname" in selectedDriver &&
										"id" in selectedDriver &&
										"team" in selectedDriver
									) {
										const { firstname, lastname, id, team } =
											selectedDriver as DriverType;
										return (
											<div
												key={idx}
												style={
													{
														"--team-color":
															teamsColors[
																team.replace(
																	" ",
																	"_"
																) as keyof typeof teamsColors
															],
													} as CSSProperties
												}
												onClick={() => selectDriver(id)}
												className="selected-driver-placeholder"
											>
												<img
													src={`../assets/img/drivers/${firstname}-${lastname
														.toLocaleLowerCase()
														.replace(" ", "-")}.png`}
													alt={`${firstname} ${lastname}`}
													className="driver-img"
												/>
											</div>
										);
									} else {
										return (
											<div
												key={idx}
												className="selected-driver-placeholder"
											></div>
										);
									}
								})}
							</div>
						</div>
						<div className="selected-teams-container">
							<div className="selected-teams-bar">
								{selectedTeams.map(({ name, id }) => (
									<div
										style={
											{
												"--team-color":
													teamsColors[
														name.replace(" ", "-") as keyof typeof teamsColors
													],
											} as CSSProperties
										}
										onClick={() => selectTeam(id)}
										className="selected-team-container"
									>
										<img
											src={`../assets/img/teams/logos/${name.replace(
												" ",
												"-"
											)}.png`}
											alt={`${name}`}
											className="team-img"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<Button
						disabled={
							selectedDriversIDs.length !== SELECTED_DRIVERS_LIMIT ||
							selectedTeamsIDs.length !== SELECTED_TEAMS_LIMIT
						}
						onClick={sendFormation}
					>
						Salva Formazione
					</Button>
				</div>
			</div>
		</Layout>
	);
}

export default CreateFormation;
