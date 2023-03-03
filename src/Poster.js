import React, { useState, useEffect } from 'react';
import instance from './axious';
import requests from './request';
import "./Poster.css";


const base_URL = "https://image.tmdb.org/t/p/original";

function Poster() {
  const [movie, Setmovie] = useState([]);



  useEffect(() => {
    async function fetchPosterData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      Setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]
      );
      // console.log(request.data.results);
      return request;
    }

    fetchPosterData();

  }, []);

  console.log(movie);


  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "......" : str;
  }
  return (
    <>

    <header className='Banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_URL}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
        // height: "50vh"
      }}>


      {/* background image */}
      <div className='Banner_contents'>
        {/* title */}
        <h1 className='Banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>

        {/* button */}
        <div className="banner_buttons">
          <button className="buttons">Play</button>
          <button className="buttons">My List</button>

        </div>

        {/* description */}

        

          <h1 className='Movie_description'>
            {truncate(movie?.overview, 150)}
          </h1>

      


      </div>

    

    </header>

<div className='banner-fadebottom'></div>
    </>



  )


}

export default Poster;

