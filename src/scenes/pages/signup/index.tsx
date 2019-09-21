import React from "react";
import styles from "./index.css";
import { InputField, Button } from "../../../components";

const SignUp: React.FC<{}> = () => {
	const [username, setUserName] = React.useState("");
	const [fullName, setFullName] = React.useState("");
	

	return <div className={styles.container}>
		<InputField
			id="username"
			value={username}
			placeholder="Enter Your Mobile Number"
			onChange={value => setUserName(value)}
			label="Mobile Number"
		/>
		<InputField
			id="fullName"
			value={fullName}
			placeholder="Enter Your FullName"
			onChange={value => setFullName(value)}
			label="FullName"
		/>
		<Button
			onClick={() => {}}
			label="SignUp"
		/>
	</div>
}

export default SignUp;