import React from "react";
import style from "../movies.module.css";

const Movies = ({ title, overview, image }) => {
    const x = "https://image.tmdb.org/t/p/w500";
    return (
        <div className={style.moviesy}>
            <h1 className={style.title} >{title}</h1>

            <h3 className={style.overview}>{overview}</h3>

            <img className={style.imagey} src={x + image} alt="pic" />


        </div>
    );
}

export default Movies;