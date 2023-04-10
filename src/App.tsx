import "./app.css";

import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import E404 from "./pages/404";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import ButtonDemo from "./pages/ButtonDemo";
import SubRoutes from "./pages/Subroutes";


function App(): JSX.Element {

  return <>

    <div>
      Menu: <Link to="/">Home</Link> | <Link to="/articles">/articles</Link> | <Link to="/buttondemo">/buttondemo</Link> | <Link to="/subroutes">/subroutes</Link>  | <Link to="/subroutes/test1">/subroutes/test1</Link>
    </div>
    <hr />

    <Routes>

      <Route path="/" element={
        <>
          <Articles />
          {/* Highlight one article (pass parameter directly here) */}
          <Article id="a2" />
        </>
      } />

      <Route path="articles" element={<Articles />} />
      <Route path="article/:id" element={<Article />} />
      <Route path="buttondemo" element={<ButtonDemo />} />

      {/* Example of how to configure subroutes */}
      <Route path="subroutes/*" element={<SubRoutes />} />

      {/* 404 not found handler */}
      <Route path="*" element={<E404 />} />
    </Routes>
  </>;
}

export default App;
