import React from "react";
import "./Profile.scss";
import { useParams } from "react-router-dom";
import { getUser } from "../../utils/api";

export default function Profile() {
  const { login } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    getUser(login).then((data) => {
      console.log(data);
      setUser(data);
      setLoading(false);
      console.log(user);
    });
  }, [login]);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className='flex'>
      <img
        className='profile__img p--r-1'
        src={user.avatar_url}
        alt={`Profile avatar for ${user.login}`}
      />
      <h1>{user.login}</h1>
      {user.bio && <p>{user.bio}</p>}
      {user.blog && (
        <p>
          <strong>Website:</strong> {user.blog}
        </p>
      )}
    </div>
  );
}
