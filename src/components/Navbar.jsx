import React from "react";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className=" px-5 py-2 flex items-center gap-10">
        <img
          className=" w-20 cursor-pointer"
          onClick={() => navigate("/")}
          src="https://i.ibb.co/HGytrLk/613f661716381700041030fc.png"
          alt="imdb-logo"
        />
        <NavLink className=" text-xl font-semibold" to={"/"}>
          Popular
        </NavLink>
        <NavLink className=" text-xl font-semibold" to={"/top-rated"}>
          Top Rated
        </NavLink>
        <NavLink className=" text-xl font-semibold" to={"/upcoming"}>
          Upcoming
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
