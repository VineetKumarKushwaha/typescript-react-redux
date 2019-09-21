import React from "react";
import styles from "./index.css";
import Routes from "./routes";

const App = (): React.ReactElement<"div"> =>
	<div className={styles.container}>
		<Routes />
	</div>;

export default App;
