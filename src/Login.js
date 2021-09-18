import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const LoginToApp = (e) => {
    e.preventDefault();
    // bla bla
    auth
      .signInWithEmailAndPassword(email.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uidL: userAuth.user.uid,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("please enter a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="Login">
      <h1>YOU are not logged in </h1>
      <img src="" alt="" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholer="Full name(required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholer="Profile pic URL(optional)"
          type="url"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholer="Email (required if registering)"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.password)}
          placeholer="Password "
          type="password"
        />
        <button type="submit" onClick={LoginToApp}>
          Sign in{" "}
        </button>
      </form>
      <p>
        Not a member ? {""}
        <span className="login__register" onClick={register}>
          Register now ~!
        </span>
      </p>
    </div>
  );
}
export default Login;
