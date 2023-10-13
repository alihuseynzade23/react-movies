import { Movies } from "../components/Movies";
import React, { Component } from "react";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

// const APIKEY = import.meta.env.REACT_APP_API_KEY;

class Main extends Component {
    state = {
        movies: [],
        movie: "movie",
        series: "series",
        all: "",
        loading: true,
    };
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=340b239f&s=matrix`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ movies: data.Search, loading: false });
            });
    }
    submitSearch = (str, type) => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=340b239f&s=${str}&type=${type}`
        )
            .then((response) => response.json())
            .then((data) => {
                this.setState({ movies: data.Search, loading: false });
            });
    };
    render() {
        const { movies, movie, series, all, loading } = this.state;
        return (
            <main className="container content">
                <Search
                    all={all}
                    movie={movie}
                    series={series}
                    cb={this.submitSearch}
                />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export { Main };

// We write a movie name
// We are getting all the movies
//
