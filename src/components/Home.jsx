import React from "react";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../reduxSlices/MovieSlice";
import "../App.css";
import { Link } from "react-router-dom";
import Card from "./Card";

function Home() {
  const dispatch = useDispatch();
  const popularMoviesUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

  const moviesData = useSelector((state) => state.movies);
  useEffect(() => {
    (async () => {
      dispatch(getMovies(popularMoviesUrl));
      console.log(moviesData);
    })();
  }, []);
  return (
    <div>
      <div className=" w-[95%] mx-auto my-5">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={5}
          infiniteLoop={true}
          showStatus={true}
          emulateTouch={true}
          swipeable={true}
        >
          {moviesData.data.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <div id="img-grad" key={movie.id} className="relative">
                <img
                  className=" w-full h-[600px] object-cover opacity-90"
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt=""
                />
                <div className=" text-left p-10 absolute bottom-0 z-10">
                  <h1 className="text-4xl font-bold">{movie.original_title}</h1>
                  <p className=" my-2 text-xl font-semibold">
                    {movie.release_date.slice(0, 4)}&nbsp;&nbsp;&nbsp; Rating :{" "}
                    {movie.vote_average} ★{" "}
                  </p>
                  <p className="font-semibold leading-6 text-lg">
                    {movie.overview}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <h1 className="text-center text-4xl font-bold my-10">Popular</h1>
      <div id="gcontainer" className=" w-[95%] mx-auto mt-8 pb-24 gap-4 ">
        {moviesData.data.map((movie) => {
          return <Card key={movie.id} movie={movie}></Card>;
        })}
      </div>
    </div>
  );
}

export default Home;
