import React, { useState, useEffect, SetStateAction } from "react";

import { userJwtControllerApi } from "../services/apis/ApiConfiguration";

import { useNavigate } from "react-router-dom";

import * as StorageHelper from "../helpers/StorageHelper";

import {
	Avatar,
	TextField,
	FormControlLabel,
	Checkbox,
	Paper,
	Box,
	Grid,
	Typography,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "./../components/Button";

const LoginForm = React.memo(() => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [token, setToken] = useState<string>("");

	const navigate = useNavigate();

	const authenticate = () => {
		userJwtControllerApi
			.authorize({
				loginVM: {
					username,
					password,
				},
			})
			.then(
				(res) => {
					if (res != null && typeof res.idToken !== "undefined") {
						setToken(res.idToken.toString());
						StorageHelper.storeAccessToken(res.idToken);
						navigate("/dashboard");
					}
				},
				(err) => {
					setToken(err);
				}
			);
	};

	return (
		<Grid container component="main" sx={{ height: "100vh" }}>
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: "url(https://source.unsplash.com/random/?f1)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<p>{username}</p>
					<p>{password}</p>
					<p>{token.toString()}</p>
					<Box sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							autoFocus
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setUsername(event.target.value);
							}}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								setPassword(event.target.value);
							}}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button onClick={authenticate}>Sign In</Button>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
});

export default LoginForm;
