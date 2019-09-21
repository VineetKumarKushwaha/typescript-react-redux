import React from "react";
import styles from "./index.css";

interface Props {
	value: string;
	onChange: (a: string) => void;
	placeholder: string;
	label: string;
	id: string;
};

const InputField: React.FC<Props> = (props: Props) => {
	return <div className={styles.container}>
		<label htmlFor={props.id}>{props.label}</label>
		<input
			id={props.id}
			type="text"
			onChange={e => props.onChange(e.target.value)}
			placeholder={props.placeholder}
			value={props.value}
		/>
	</div>;
};

export default InputField;