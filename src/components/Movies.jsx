import { Movie } from "./Movie";
function Movies(props) {
    const { movies = [] } = props;
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gridGap: "25px",
                margin: "2rem 0",
            }}
            className="movies"
        >
            {movies.length ? (
                movies.map((movie) => <Movie {...movie} key={movie.imdbID} />)
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}

export { Movies };
