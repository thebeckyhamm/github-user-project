import React from "react";
import "./Profile.scss";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { login } = useParams();
  return <h1>{login}</h1>;
}
