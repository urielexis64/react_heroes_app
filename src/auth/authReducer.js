import {types} from "../types/types";
/* const state = {
	name: "Uriel",
	logged: false,
}; */

export const authReducer = (state = {}, action) => {
	console.log(action);
	switch (action.type) {
		case types.login:
			return {
				...action.payload,
				logged: true,
			};
		case types.logout:
			console.log("yes");
			return {
				logged: false,
			};
		default:
			return state;
	}
};
