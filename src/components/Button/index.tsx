import React from "react";
import styles from "./index.css";
import cx from "classnames";

interface Props {
	onClick: () => void;
	label: string;
	disbaled?: boolean;
};

const Button: React.FC<Props> = (props: Props) => {
	const classes = cx({
		[styles.container]: true,
		disabled: props.disbaled
	});

	return <div className={classes}
		onClick={() => !props.disbaled && props.onClick()}
	>{props.label}</div>;
};

export default Button;