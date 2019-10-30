import React from "react";
import { getUsers } from "../utils/api";

export default function UserSearch() {
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [queryString, setQueryString] = React.useState("thebeckyhamm");

  React.useEffect(() => {
    setLoading(true);
    getUsers(queryString).then((data) => {
      setResults(data.items);
      setLoading(false);
    });
  }, [queryString]);

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <ul>
      {results.map(({ login, id, avatar_url, url }) => {
        return <li key={id}>{login}</li>;
      })}
    </ul>
  );
}
