import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ genres: [] });
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const result = await res.json();
      setMovie(result);
    })();
  }, []);

  return (
    <div className="mt-2 pb-10">
      <div
        id="bg-grad"
        style={{
          backgroundImage: `url(
            "https://image.tmdb.org/t/p/original${movie.backdrop_path}"
          )`,
          height: "530px",
        }}
        className=" w-[85%] mx-auto bg-cover relative bg-center rounded-lg flex items-end pb-5"
      >
        <div id="" className="w-[72%] ml-auto relative z-10 ">
          <h1 className="font-bold text-3xl">{movie.original_title}</h1>
          <p className="text-lg font-medium">{movie.tagline}</p>
          <p>
            Rating : {movie.vote_average} ★ &nbsp;&nbsp;&nbsp;&nbsp;
            {`(${movie.vote_count}) votes`}
          </p>
          <p>{movie.runtime} mins</p>
          <p>Release date : {movie.release_date}</p>
          <div className="flex gap-5 mt-3">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className=" inline-block px-3 py-1 border border-white rounded-xl bg-transparent"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        <img
          className=" w-[290px] h-[390px] rounded-xl shadow-xl shadow-gray-800 absolute -bottom-40 left-10 z-10"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="w-[85%] mx-auto">
        <div className="w-[72%] ml-auto">
          <p className=" leading-7 mt-4">
            <b>Overview : </b> <br />
            {movie.overview}
          </p>
        </div>
      </div>
      <div className="mt-20 w-[80%] mx-auto flex justify-start gap-12">
        <span className="font-semibold text-lg">Related Links</span>
        <a
          className="inline-block bg-slate-300 text-black font-medium px-3 py-1"
          href={movie.homepage}
        >
          Home page
        </a>
        <a
          className="inline-block bg-slate-300 text-black font-medium px-3 py-1"
          href={"https://www.imdb.com/title/" + movie.imdb_id}
          target="_blank"
        >
          IMDB
        </a>
      </div>
      <h1 className="text-center font-bold text-2xl my-10">
        Production companies
      </h1>
      <div className="flex w-[80%] mx-auto justify-center gap-10">
        {movie.production_companies &&
          movie.production_companies.map((company) => (
            <div className="w-25% text-center">
              {company.logo_path && (
                <span className="text-center">
                  <img
                    className="  w-[150px] h-[200px]  object-contain"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Detail;
