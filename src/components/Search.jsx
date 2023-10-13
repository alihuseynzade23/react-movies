import React from "react";

class Search extends React.Component {
    state = {
        search: "",
    };

    handleSearch = (e) => {
        if (e.key === "Enter") {
            this.props.cb(this.state.search, this.props.all);
        }
    };

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        id="email_inline"
                        type="text"
                        className="validate"
                        placeholder="Search"
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleSearch}
                    />
                </div>
                <button
                    className="btn search-btn"
                    onClick={() =>
                        this.props.cb(this.state.search, this.props.all)
                    }
                >
                    Search
                </button>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <p>
                        <label>
                            <input
                                className="with-gap"
                                name="group3"
                                type="radio"
                                onClick={() =>
                                    this.props.cb(
                                        this.state.search,
                                        this.props.all
                                    )
                                }
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
                                    this.props.cb(
                                        this.state.search,
                                        this.props.movie
                                    );
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
                                    this.props.cb(
                                        this.state.search,
                                        this.props.series
                                    );
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
}

export { Search };
