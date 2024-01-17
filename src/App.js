import React from "react";
import { useAuth } from "react-oidc-context";

function App() {
  // only working with signinRedirect not popup
  return (
    <div>
      <h3>react-oidc-context; works redirect</h3>
      <Auth />
    </div>
  );
}

function Auth() {
  const auth = useAuth();

  if (auth.activeNavigator === "signinSilent") {
    return <div>Signing you in...</div>;
  } else if (auth.activeNavigator === "signoutRedirect") {
    return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }
  console.log(auth.user);

  if (auth.isAuthenticated) {
    return (
      <div>
        Hello {auth.user?.profile.sub}{" "}
        <button onClick={() => auth.removeUser()}>Log out</button>
      </div>
    );
  }
  // only working with signinRedirect not popup
  return <button onClick={() => auth.signinRedirect()}>Log in</button>;
}

export default App;
