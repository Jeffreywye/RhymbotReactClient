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
                    defaultValue="1"
                    name="TopK"
                >
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="40">40</option>
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