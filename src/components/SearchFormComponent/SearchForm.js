import React from 'react';

const SearchForm = (props) => {
    return (
        <div className="rhyme-form-container">
            <form
                className="form-inline"
                id="rhyme-form"
                onSubmit={props.onSubmit}
            >
                <input
                    className="search-bar form-control"
                    type="text"
                    name="SearchPhrase"
                    placeholder="Enter a Rhyme"
                />
                <select
                    className="custom-select"
                    defaultValue="Suffix"
                    name="PreSufVal"
                >
                    <option value="Suffix">Suffix Based</option>
                    <option value="Prefix">Prefix Based</option>

                </select>
                <select 
                    className="custom-select"
                    defaultValue="5"
                    name="TopK"
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <button
                    className="search-btn btn btn-primary"
                    type="submit"
                >
                    search
                </button>
            </form>

        </div>
    );
}

export default SearchForm;