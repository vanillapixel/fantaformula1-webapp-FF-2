import { useReducer } from "react";
// import axios from "axios";
import reducer from "./reducer";
import {
	GET_FANTATEAM,
	GET_FANTATEAM_ERROR,
	CREATE_FANTATEAM,
	CREATE_FANTATEAM_ERROR,
} from "./actionTypes";
import fantaTeamContext from "./context";

const FantaTeamState = ({ children }) => {
	const initialState = {
		fantaTeam: [],
		error: "",
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const error = state ? state.error : "";

	// Get New FantaTeam
	const getFantaTeam = async () => {
		try {
			dispatch({
				type: GET_FANTATEAM,
			});
		} catch (err) {
			dispatch({
				type: GET_FANTATEAM_ERROR,
				payload: err.response.msg,
			});
		}
	};

	// Create New FantaTeam
	const createFantaTeam = async (fantaTeam) => {
		try {
			dispatch({
				type: CREATE_FANTATEAM,
				payload: fantaTeam,
			});
		} catch (err) {
			dispatch({
				type: CREATE_FANTATEAM_ERROR,
				payload: err.response.msg,
			});
		}
	};

	return (
		<fantaTeamContext.Provider
			value={{
				fantaTeam: state?.fantaTeam,
				error: error,
				createFantaTeam,
				getFantaTeam,
			}}
		>
			{children}
		</fantaTeamContext.Provider>
	);
};

export default FantaTeamState;
