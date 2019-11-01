export function getUsers({ queryString = "thebeckyhamm", sort, order }) {
  return fetch(
    `https://api.github.com/search/users?q=${queryString}&sort=${sort}&order=${order}&per_page=20`
  ).then((res) => res.json());
}

export function getUser(username = "thebeckyhamm") {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}
