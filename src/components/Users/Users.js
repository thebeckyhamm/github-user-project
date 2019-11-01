import React from "react";
import { getUsers } from "../../utils/api";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import "./Users.scss";

export default function Users() {
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [searchParams, setSearchParams] = React.useState({
    queryString: "",
    sort: "",
    order: "desc"
  });

  React.useEffect(() => {
    if (searchParams.queryString) {
      setLoading(true);
      setResults([]);
      getUsers(searchParams).then((data) => {
        setResults(data.items);
        setLoading(false);
      });
    }
  }, [searchParams]);

  return (
    <React.Fragment>
      <Search handleSearch={setSearchParams} />
      {loading && <h3>Loading</h3>}
      {results && (
        <ul className='results'>
          {results.map(({ login, id, avatar_url }) => {
            return (
              <li className='results__item' key={id}>
                <Link
                  to={`user/profile/${login}`}
                  className='flex flex--align-center results__link'>
                  <img className='results__img' src={avatar_url} alt={login} />
                  <span className='results__username'>{login}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
}
