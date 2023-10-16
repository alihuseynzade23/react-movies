import React, { useState } from "react";

function Search(props) {
    const { searchMovies = Function.prototype, all, movie, series } = props;
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            searchMovies(search, all);
        }
    };

    return (
        <div className="row">
            <div className="input-field">
                <input
                    id="email_inline"
                    type="text"
                    className="validate"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleSearch}
                />
            </div>
            <button
                className="btn search-btn"
                onClick={() => searchMovies(search, all)}
            >
                Search
            </button>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>
                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            onClick={() => searchMovies(search, all)}
                        />
                        <span>All</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            onClick={() => {
                                searchMovies(search, movie);
                            }}
                        />
                        <span>Movies only</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            onClick={() => {
                                searchMovies(search, series);
                            }}
                        />
                        <span>Series only</span>
                    </label>
                </p>
            </div>
        </div>

        // </form>
    );
}

export { Search };
