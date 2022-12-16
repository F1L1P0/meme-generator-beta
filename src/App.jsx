import React, {useState} from 'react';
import './scss/style.scss';
import Header from "./components/Header";
import Generator from "./components/Generator";

export default function App() {

  return (
    <>
    <Header/>
    <div className="center">
    <Generator/>
    </div>
    </>
  )
}