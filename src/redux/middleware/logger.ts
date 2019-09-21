import { Store } from "redux";
import { Dispatch } from "react";

const logger = (store: Store) => (next: Dispatch<any>) => (action: any) => {
	console.group(action.type)
	console.info("dispatching", action)
	const result = next(action)
	console.log("next state", store.getState())
	console.groupEnd()
	return result
}
	
export default logger;