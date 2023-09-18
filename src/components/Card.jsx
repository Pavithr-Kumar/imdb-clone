import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
function Card({ movie }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <div className=" w-[210px] h-[320px] bg-gradient-to-tr from-gray-700 to-slate-800 rounded-xl"></div>
      ) : (
        <div
          onClick={() => navigate(`/movie/${movie.id}`)}
          className=" w-[210px] h-[320px] hover:scale-110 transition-all duration-500 overflow-hidden rounded-xl cursor-pointer"
          to={`movie/${movie.id}`}
        >
          <div className="relative overflow-hidden">
            <img
              className=" transition-all duration-500"
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.poster_path
              }`}
              alt=""
            />

            <div className=" absolute bottom-0 opacity-0 hover:opacity-100 pb-3 px-2 pt-32 transition-all duration-500 bg-gradient-to-t from-black  to-transparent">
              <h2 className="text-xl font-bold">{movie.original_title}</h2>
              <p className="font-semibold">
                {" "}
                {movie.release_date.slice(0, 4)} &nbsp;&nbsp;&nbsp;Rating :{" "}
                {movie.vote_average} ★{" "}
              </p>
              <p>
                <b>Overview:</b> {movie.overview.slice(0, 118)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
