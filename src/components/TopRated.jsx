import React from "react";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../reduxSlices/MovieSlice";
import "../App.css";

import Card from "./Card";
function TopRated() {
  const dispatch = useDispatch();
  const popularMoviesUrl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

  const moviesData = useSelector((state) => state.movies);
  useEffect(() => {
    (async () => {
      dispatch(getMovies(popularMoviesUrl));
      console.log(moviesData);
    })();
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-10">Top Rated</h1>
      <div id="gcontainer" className=" w-[95%] mx-auto mt-8 pb-24 gap-4 ">
        {moviesData.data.map((movie) => {
          return <Card key={movie.id} movie={movie}></Card>;
        })}
      </div>
    </div>
  );
}

export default TopRated;
