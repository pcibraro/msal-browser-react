import React from 'react';
import './App.css';
import Welcome from "./Welcome";

import { useMsal } from "./msal-context";
import { loginRequest } from "./auth-config";

function App() {
  const { loading, isAuthenticated, login } = useMsal();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {!isAuthenticated && (
        <button onClick={() => login(loginRequest, "loginRedirect")}>Log in</button>
      )}
      {isAuthenticated && <Welcome/>}
    </div>
  );
}
export default App;
