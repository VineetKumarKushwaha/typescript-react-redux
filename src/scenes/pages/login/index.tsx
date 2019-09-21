import React from "react";
import styles from "./index.css";
import { InputField, Button } from "../../../components";


const Login: React.FC<{}> = () => {
	const [username, setUserName] = React.useState("");
	
	return <div className={styles.container}>
		<InputField
			id="username"
			value={username}
			placeholder="Enter Your Mobile Number"
			onChange={value => setUserName(value)}
			label="UserName"
		/>
		<br/>
		<Button
			onClick={() => alert(username)}
			label="Login"
		/>
	</div>;
}

export default Login;