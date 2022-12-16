import { useState } from "react";
import React from "react";

export default function Header(){
        let hodiny = () => {
        let date = new Date();
        let hrs = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        return (`právě je ${hrs} hodin a ${min} minut a ${sec} sekund`)
    }

    return(
        <header className="header">
            <h1>Meme Generator</h1>
        </header>
    )
}