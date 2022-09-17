import React from "react";

const Search = ({handleChange, value, handleSubmit, showAll})=>{
    return(
        <label>
        Search:
        <input type="text" onChange={handleChange} value={value}></input>
        <button onClick={handleSubmit}>{showAll? 'Search' : 'Show all'}</button>
      </label>
    )
};

export default Search;