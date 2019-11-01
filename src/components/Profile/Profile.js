import React from "react";
import "./Profile.scss";
import { useParams } from "react-router-dom";
import { getUser, getFollowers, getFollowing, getRepos } from "../../utils/api";

export default function Profile() {
  const { login } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);
  const [followers, setFollowers] = React.useState([]);
  const [following, setFollowing] = React.useState([]);
  const [repos, setRepos] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    const userData = getUser(login);
    const followerData = getFollowers(login);
    const followingData = getFollowing(login);
    const repoData = getRepos(login);

    Promise.all([userData, followerData, followingData, repoData])
      .then((data) => {
        setUser(data[0]);
        setFollowers(data[1]);
        setFollowing(data[2]);
        setRepos(data[3]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [login]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return (
      <React.Fragment>
        <p>
          There has been an error. Please see the message below for details:
        </p>
        <p>"{error}"</p>
      </React.Fragment>
    );
  }

  return (
    <div>
      <div className='flex'>
        <img
          className='profile__img p--r-1'
          src={user.avatar_url}
          alt={`Profile avatar for ${user.login}`}
        />
        <div>
          <h1>{user.login}</h1>
          {user.bio && <p>{user.bio}</p>}
          {user.blog && (
            <p>
              <strong>Website:</strong> {user.blog}
            </p>
          )}
        </div>
      </div>
      <div className='flex'>
        <div className='flex--1'>
          <h2>Followers</h2>
          {followers.length > 0 ? (
            <ul>
              {followers.map((follower) => {
                return <li key={follower.id}>{follower.login}</li>;
              })}
            </ul>
          ) : (
            <p>This user has no followers.</p>
          )}
        </div>
        <div className='flex--1'>
          <h2>Following</h2>
          {following.length > 0 ? (
            <ul>
              {following.map((followee) => {
                return <li key={followee.id}>{followee.login}</li>;
              })}
            </ul>
          ) : (
            <p>This user is not following anyone.</p>
          )}
        </div>
      </div>
      <div>
        <h2>Repos</h2>
        {repos.length > 0 ? (
          <ul>
            {repos.map((repo) => {
              return <li key={repo.id}>{repo.full_name}</li>;
            })}
          </ul>
        ) : (
          <p>This user has no repos.</p>
        )}
      </div>
    </div>
  );
}
