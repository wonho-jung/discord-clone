import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://download.logo.wine/logo/Discord_(software)/Discord_(software)-Logo.wine.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
