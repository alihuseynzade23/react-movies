function Movie(props) {
    const { Poster: poster, Type: type, Year: year, Title: name } = props;
    return (
        <div className="movie card">
            <div className="card-image waves-effect waves-block waves-light">
                <img style={{ height: "400px" }} src={poster} />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem 1rem",
                }}
            >
                <div>
                    <span className="card-title activator grey-text text-darken-4">
                        <p
                            style={{
                                marginBottom: ".5rem",
                                fontSize: "1.7rem",
                            }}
                        >
                            {name}
                        </p>
                        <p>{type}</p>
                    </span>
                </div>
                <div>
                    <p>{year}</p>
                </div>
            </div>
        </div>
    );
}

export { Movie };
