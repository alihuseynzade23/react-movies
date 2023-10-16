import { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import React, { Component } from "react";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

// const APIKEY = import.meta.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState("movie");
    const [series, setSeries] = useState("series");
    const [all, setAll] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=340b239f&s=matrix`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            });
    }, []);

    const submitSearch = (str, type) => {
        setLoading(true);
        fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=340b239f&s=${str}&type=${type}`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            });
    };
    return (
        <main className="container content">
            <Search
                all={all}
                movie={movie}
                series={series}
                searchMovies={submitSearch}
            />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    );
}

export { Main };

// We write a movie name
// We are getting all the movies
//
