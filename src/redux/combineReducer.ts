import { combineReducers } from "redux";

export interface InitialState {
    test: number;
};

export default combineReducers({
	test: (s: number, a: any) => {
		if (a) return s || 10;
		return s || 10;
	}
});
