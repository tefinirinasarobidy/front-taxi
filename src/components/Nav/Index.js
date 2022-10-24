import React from "react";
import { useDispatch } from "react-redux";
import "./Index.css";
import { token } from "../../store/actions";

export default function Index() {
  const dispatch = useDispatch();
  const deconnecter = () => {
    localStorage.removeItem("token");
    dispatch(token(null));
  };
  return (
    <div className="nav">
      <div className="logo"> logo</div>
      <div className="action">
        <ul className="ul-nav">
          <li className="comander">
            <a href="">Commander</a>
          </li>
          <li className="comander">
            <a href="">Devenir chauffeur</a>
          </li>
          <li className="register">
            <a href="">créer un compte</a>
          </li>
          <li className="login">
            <a href="">Se connecter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
