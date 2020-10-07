import React from "react";
import "../SearchForm/SearchForm.css"

function SearchForm(props) {
    return (
        <form className="searchbox">
            <div className="form-group">
                <input
                    type="search"
                    className="form-control"
                    placeholder="Search Employee"
                    onChange={props.handleInputChange}
                />
                {/* <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                    Search
        </button> */}
            </div>
        </form>
    );
}

export default SearchForm;