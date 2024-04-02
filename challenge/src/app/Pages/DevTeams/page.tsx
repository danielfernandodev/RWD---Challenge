'use client'
import Image from "next/image";
import Link from "next/link";
import "./DevTeams.css"


export default function DevTeams() {
  return (
    <>
      <h1 className="DevTeams_title">Dev Teams</h1>

      <section className="cardGrid">
        <div className="card">
          <h1>Cauã Ferrigolli Loureiro</h1>
          <h2>RM: 553093</h2>
        </div>
        <div className="card">
        
          <h1>Daniel Fernando Alves de Magalhaes </h1>
          <h2>RM: 553785 </h2>
        </div>
        <div className="card">
          <h1>Leonardo Chaves Da Silva</h1>
          <h2>RM: 552707</h2>
        </div>
      </section>
    </>
  );
}
