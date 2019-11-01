import React from "react";
import { getUsers } from "../../utils/api";
import Search from "../Search/Search";
import "./Users.scss";

export default function Users() {
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [queryString, setQueryString] = React.useState("");

  React.useEffect(() => {
    if (!!queryString) {
      setLoading(true);
      getUsers(queryString).then((data) => {
        setResults(data.items);
        setLoading(false);
      });
    }
  }, [queryString]);

  return (
    <React.Fragment>
      <Search handleSearch={setQueryString} />
      {loading && <h3>Loading</h3>}
      {results && (
        <ul className='results'>
          {results.map(({ login, id, avatar_url }) => {
            return (
              <li className='results__item' key={id}>
                <img className='results__img' src={avatar_url} alt={login} />
                <span className='results__username'>{login}</span>
              </li>
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
}
