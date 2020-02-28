import React from "react";

const RhymeList = (props) => {
    return (
        <div className = "rhyme-list-container">
            <div className = "rhyme-list">
                <ul className="list-group">
                    <li className="list-group-item active">Words that rhyme with {props.input}</li>
                    {props.data.map( 
                        (rhyme, index, arr) => (
                            <li className="list-group-item" key={rhyme}>{rhyme}</li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}

export default RhymeList;