import {
	GET_FANTATEAM,
	GET_FANTATEAM_ERROR,
	CREATE_FANTATEAM,
	CREATE_FANTATEAM_ERROR,
} from "./actionTypes";
import {
	getLocalStorageItem,
	setLocalStorageItem,
} from "../../utils/localStorage";

const reducer = (
	state: { fantaTeam: any },
	action: { type: any; payload: any }
) => {
	switch (action.type) {
		case GET_FANTATEAM:
			const peto = getLocalStorageItem("fantaTeam");
			state.fantaTeam = peto;
			console.log(state.fantaTeam);
			return state.fantaTeam;
		case CREATE_FANTATEAM:
			setLocalStorageItem("fantaTeam", action.payload);
			return {
				...state,
				fantaTeam: [action.payload],
				loading: false,
			};
		case CREATE_FANTATEAM_ERROR:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
