import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Connexion</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Nom D'utilisateur</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Entrez votre nom d'utilisateur"
          ref={userRef}
        />
        <label>Le Mot De Passe</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Entrez votre mot de passe..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Connexion
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          S'inscrire
        </Link>
      </button>
    </div>
  );
}
