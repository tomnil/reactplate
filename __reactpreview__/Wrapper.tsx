import "../src/app.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";


export const Wrapper: React.FC = ({
    children,
}) => {
    return <>
        <BrowserRouter>
            {children}
        </BrowserRouter>
    </>;
};