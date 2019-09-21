import { applyMiddleware, createStore, Store, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import monitorReducersEnhancer from "./enhancers/monitorReducers";
import loggerMiddleware from "./middleware/logger";
import { InitialState }from "./combineReducer";
import rootReducer from "./combineReducer";

export default function configureStore(preloadedState: InitialState = { test: 10}): Store {
	const middlewares = [loggerMiddleware, thunkMiddleware]
	const middlewareEnhancer = applyMiddleware(...middlewares)

	const enhancers = compose(middlewareEnhancer, monitorReducersEnhancer);
	const composedEnhancers = composeWithDevTools(enhancers);

	const store = createStore(rootReducer, preloadedState, composedEnhancers);

	return store
}