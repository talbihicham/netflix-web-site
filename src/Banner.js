import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './banner.css';


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetch_Data() {
            const request = await axios.get(requests.fetchNetflixOriginals);
           
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                    //Math.floor(Math.random() * Math.floor(request.data.results.lenght))
                ]
            );
            return request;
        }
        fetch_Data();
    }, []);
    //console.log(movie);
    

    return (
        <header className="banner"
           style={{
               backgroundSize: "cover",
               backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
               backgroundPosition: "center center",
           }}
        >
           <div className="banner__contents">
               <h1 className="banner__title">
                   {movie?.title || movie?.name || movie?.original_name}   
               </h1>
               <div className="banner__buttons">
                   <button className="banner__button">Play</button>
                   <button className="banner__button">My List</button>
               </div>

               <h1 className="banner__description">
                   {movie?.overview}
               </h1>
           </div>

           <div className="banner--fedeBottom" />

        </header>
    )
}
export default Banner;