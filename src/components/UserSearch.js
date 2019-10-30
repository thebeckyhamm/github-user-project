import React from "react";
import { getUsers } from "../utils/api";

export default function UserSearch() {
  const [results, setResults] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [queryString, setQueryString] = React.useState("");

  React.useEffect(() => {
    if (!!search) {
      setLoading(true);
      getUsers(search).then((data) => {
        setResults(data.items);
        setLoading(false);
      });
    }
  }, [search]);

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder='Search for a user'
        value={queryString}
        onChange={(e) => setQueryString(e.target.value)}
      />
      <button onClick={() => setSearch(queryString)}>Search</button>
      {loading && <h3>Loading</h3>}
      {results && (
        <ul>
          {results.map(({ login, id, avatar_url, url }) => {
            return <li key={id}>{login}</li>;
          })}
        </ul>
      )}
    </React.Fragment>
  );
}
