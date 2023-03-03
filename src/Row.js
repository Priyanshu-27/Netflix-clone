import React, { useEffect, useState } from 'react';
import instance from './axious';
import './Row.css';
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_URL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchurl, isLargeRow }) {
  const [movies, Setmovies] = useState([]);
  const [trailerUrl , setTrailerUrl] = useState("");
  useEffect(() => {
    //if we [] , run once when the row loads and dont run again
    async function fetchData() {
      const request = await instance.get(fetchurl);
      // console.log(request.data.results);
      Setmovies(request.data.results);
    }
    
    fetchData();
  }, [fetchurl])
  
  // console.log(movies);
  const opts = {
     height : "390" ,
     width : "100%" ,
     playervars : {
       autoplay : 1 ,
     },
  }

  const handleClick = (movies) => {
    if(trailerUrl){
      setTrailerUrl("");
    }else {
      movieTrailer(movies?.name ||movies?.original_title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
       setTrailerUrl( urlParams.get("v"));
      })
      .catch((error) => console.log(error));
}

  }
  return (
    <div className='row'>
      <h2 className='Row_heads'>{title}</h2>
      {/* title */}

      <div className='row_poster'>
        {/* several rows poster */}
        {movies.map(movies => (
          <img
            key = {movies.id}
            onClick={() => handleClick(movies)}
            className = {`movies_posters ${isLargeRow && "row_largeposter"}`}
            src={`${base_URL}${ isLargeRow ? movies.poster_path : movies.backdrop_path}`} alt={movies.name}
            
           />
        ))}

    </div>

   {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} 

      </div>


  )
}

export default Row