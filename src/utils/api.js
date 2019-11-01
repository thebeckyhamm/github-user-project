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

export function getFollowers(username) {
  return fetch(
    `https://api.github.com/users/${username}/followers?per_page=5`
  ).then((res) => res.json());
}

export function getFollowing(username) {
  return fetch(
    `https://api.github.com/users/${username}/following?per_page=5`
  ).then((res) => res.json());
}

export function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos?per_page=5`
  ).then((res) => res.json());
}
