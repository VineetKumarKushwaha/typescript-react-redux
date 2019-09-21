import { StoreCreator, Reducer, StoreEnhancer } from "redux";
const round = (number: number): number => Math.round(number * 100) / 100;

const monitorReducerEnhancer: StoreCreator = (createStore: StoreCreator) => (
	reducer: Reducer,
	initialState: { test: number },
	enhancer: StoreEnhancer
) => {
	const monitoredReducer = (state: { test: number }, action: any): { test: number } => {
		const start = performance.now();
		const newState = reducer(state, action);
		const end = performance.now();
		const diff = round(end - start);

		console.log("reducer process time:", diff);

		return newState;
	};

	return createStore(monitoredReducer, initialState, enhancer);
}

export default monitorReducerEnhancer;