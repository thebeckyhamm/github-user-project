import React from "react";

export default function Search({ handleSearch }) {
  const [queryString, setQueryString] = React.useState("");

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder='Search for a user'
        value={queryString}
        onChange={(e) => setQueryString(e.target.value)}
        onKeyPress={(e) => {
          e.key === "Enter" && handleSearch(queryString);
        }}
      />
      <button onClick={() => handleSearch(queryString)}>Search</button>
    </React.Fragment>
  );
}
