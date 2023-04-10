import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../src/index.css";

export const Wrapper = ({ children }) => (
    <BrowserRouter>{children}</BrowserRouter>
);