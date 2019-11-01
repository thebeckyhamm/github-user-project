import React from "react";
import "./Search.scss";

export default function Search({ handleSearch }) {
  const [queryString, setQueryString] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [order, setOrder] = React.useState("desc");

  return (
    <div className='search'>
      <div className='flex flex--column'>
        <label className='visually-hidden' htmlFor='userSearch'>
          Search for a user
        </label>
        <input
          id='userSearch'
          name='userSearch'
          type='text'
          className='search__input'
          placeholder='Search for a user'
          value={queryString}
          onChange={(e) => setQueryString(e.target.value)}
          onKeyPress={(e) => {
            e.key === "Enter" && handleSearch({ queryString, sort, order });
          }}
        />
        <div className='flex'>
          <div className='flex--1'>
            <label className='search__label' htmlFor='sorting'>
              Sort by:
            </label>
            <select
              name='sorting'
              id='sorting'
              className='search__select'
              value={sort}
              onChange={(e) => setSort(e.target.value)}>
              <option value=''>Best Match</option>
              <option value='followers'>Number of Followers</option>
              <option value='repositories'>Number of Repositories</option>
              <option value='joined'>Date Joined</option>
            </select>
          </div>
          <div className='flex--1'>
            <label className='search__label' htmlFor='ordering'>
              Order by:
            </label>
            <select
              name='ordering'
              id='ordering'
              className='search__select'
              value={order}
              onChange={(e) => setOrder(e.target.value)}>
              <option value='desc'>Descending</option>
              <option value='asc'>Ascending</option>
            </select>
          </div>
        </div>
      </div>
      <button
        className='search__submit'
        onClick={() => handleSearch({ queryString, sort, order })}>
        Search
      </button>
    </div>
  );
}
