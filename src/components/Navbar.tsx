import * as React from "react";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo-ff.png";
import "./navbar.scss";
import {
	accountResourceApi,
	seasonResourceApi,
	userJwtControllerApi,
} from "../services/apis/ApiConfiguration";

const pagesMenuItems = [
	{
		label: "dashboard",
		link: "/dashboard",
	},
	{
		label: "formation",
		link: "/create_formation",
	},
	{
		label: "standings",
		link: "/standings",
	},
];
const accountMenuItems: any = [];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	// const getAllSeason = () => {
	// 	accountResourceApi.getAccount().then((res) => {
	// 		console.log(res);
	// 	});
	// };

	// useEffect(() => {
	// 	getAllSeason();
	// });

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<div className="navbar-container">
					<AdbIcon sx={{ display: { xs: "none", md: "flex" } }} />
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pagesMenuItems.map(({ label, link }) => (
								<Link to={link} key={label} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{label}</Typography>
								</Link>
							))}
						</Menu>
					</Box>
					<div style={{ width: "55px" }} className="logo-container">
						<img src={logo} alt="" />
					</div>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open menuItems">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{pagesMenuItems.length > 0 &&
								pagesMenuItems.map(({ label, link }) => (
									<MenuItem key={label} onClick={handleCloseUserMenu}>
										<Link to={link}>
											<Typography textAlign="center">{label}</Typography>
										</Link>
									</MenuItem>
								))}
						</Menu>
					</Box>
				</div>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
