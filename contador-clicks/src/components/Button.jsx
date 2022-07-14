import React from "react";
import "../styles/Button.css";

export default function Botton({ texto, esBtnClick, onClick }) {

    return (
        <button className={esBtnClick ? "btn-click" : "btn-reiniciar"}
            onClick={onClick}>
            {texto}
        </button>
    )
}