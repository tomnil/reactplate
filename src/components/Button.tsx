import React from "react";

import styles from "./Button.module.scss";


export type Props = {
	text: string;
	color?: "blue" | "red"
};

const Button = ({ text, color }: Props): JSX.Element => {

	return <>

		<button className={styles.button} color={color} onClick={() => alert("Clicked!")}>{text}</button>
	</>;

};
export default Button;

























