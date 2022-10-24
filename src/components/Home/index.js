import React from "react";
import fond from "../../image/fond-1.jpg"
import './Index.css'
import logoDepart from "../../image/logo-depart.svg"
import logoAriver from "../../image/logo-arriver.svg"
import calendar from "../../image/calendar.svg"

export default function index() {
  return (
    <div>
      <div className="sumilation">
        <img src={fond} />
        <div className="formulaire">
          <div className="depart">
            <span className="text-span">Départ : </span>
            <input className="input" type="text" placeholder="Adress de depart " />
            <img src={logoDepart} className="logo-right" />
          </div>
          <div className="depart">
            <span className="text-span">Arriver : </span>
            <input className="input" type="text" placeholder="Adress de destinateur " />
            <img src={logoAriver} className="logo-right" />
          </div>
          <div className="depart">
            <span className="text-span">Quand : </span>
            <button type="button" name="" id="" className="btn btn-quand active"> Maintenant</button>
            <button type="button" name="" id="" className="btn btn-quand"> Plus tard</button>
            <img src={calendar} className="logo-right quand" />
          </div>
          <div className=" button-action">
            <button type="button" className="btn btn-estimation">Faire un estimation</button>
            <button type="button" className="btn btn-commander">Commander</button>
          </div>
        </div>
      </div>
    </div>
  );
}
