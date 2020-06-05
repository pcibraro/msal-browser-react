import React from "react";
import { useMsal } from "./msal-context";
import { apiRequest } from "./auth-config";

const Welcome = () => {
  const { user, logout, getToken, token, loginError } = useMsal();

  return (
    <div>
      <h1>Welcome {user.userName}</h1>
      {token && (<span>Your token is {token}</span>)}
      <br></br>
      <button onClick={() => getToken(apiRequest, "loginPopup")}>Get Token</button>
      <br></br>
      <button onClick={() => logout()}>Log out</button>
      <br></br>
      {loginError && (<span>Error: {loginError.message}</span>)}
    </div>
  );
};

export default Welcome;