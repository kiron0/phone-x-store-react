import React from 'react';
import './Input.css'

const Input = () => {
    return (
        <div className="container">
            <div className="input-group mb-3 mx-auto my-5 search-input">
                <input id="search-field" type="text" className="form-control" placeholder="Search your phone..." aria-label="" aria-describedby="button-addon2"></input>
                    <button id="search-btn" className="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
    );
};

export default Input;