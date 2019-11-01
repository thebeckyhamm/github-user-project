import React from "react";
import "./Search.scss";

export default function Search({ handleSearch }) {
  const [queryString, setQueryString] = React.useState("");

  return (
    <div className='search'>
      <input
        type='text'
        className='search__input'
        placeholder='Search for a user'
        value={queryString}
        onChange={(e) => setQueryString(e.target.value)}
        onKeyPress={(e) => {
          e.key === "Enter" && handleSearch(queryString);
        }}
      />
      <button
        className='search__submit'
        onClick={() => handleSearch(queryString)}>
        Search
      </button>
    </div>
  );
}
