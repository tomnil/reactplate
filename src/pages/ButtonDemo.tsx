import React from "react";

import Button from "../components/Button";


const ButtonDemo = (): JSX.Element => {

	return <>
		<Button text="Standardbutton" />
		<Button text="Blue button" color="blue" />
		<Button text="Red button" color="red" />
	</>;

};

export default ButtonDemo;
