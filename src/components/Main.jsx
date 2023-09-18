import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

import TopRated from "./TopRated";
import Detail from "./Detail";
import Upcoming from "./Upcoming";
import Navbar from "./Navbar";

function Main() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/top-rated" element={<TopRated />}></Route>
          <Route path="/upcoming" element={<Upcoming />}></Route>
          <Route path="/movie/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;
