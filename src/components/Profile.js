import React from "react";
import { json } from "react-router-dom";
import { Login } from "./Login";

const Profile = ({ saveToken, json }) => {
  return (
    <section>
      <h1>Welcome</h1>
      {/* {<p>{saveToken(json.data.username)}</p>} */}
    </section>
  );
};

export default Profile;
