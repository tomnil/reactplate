import React from "react";
import { Route, Routes } from "react-router-dom";


function SubRoutes(): JSX.Element {

  return <>

    <Routes>
      <Route path="/" element={<h1>This is /</h1>} />
      <Route path="/test1" element={<h1>This is /test1</h1>} />
    </Routes>
  </>;
}

export default SubRoutes;
