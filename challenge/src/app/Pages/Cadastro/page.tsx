'use client'
import Image from "next/image";
import Link from "next/link";
import "./Cadastro.css";

export default function Cadastro() {


  function createUser(date: any) {
    console.log(date)

  }

  return (
    <>
      <section className="section_Cadastro">
        <Image src="/assets/salesforce_negativa.svg" width={250} height={250} alt="Logo da Sales Force"/>
        <h1>Cadastro</h1>

        <form onSubmit={(createUser)} className="form_Cadastro">
          <div className="input-box">
            <label>E-mail: </label>
            <input type="email"  placeholder="E-mail do usuário"/>
          </div>

          <div className="input-box">
            <label>Nome: </label>
            <input type="text" placeholder="Nome do usuário"/>
          </div>

          <div className="input-box">
            <label>Cargo: </label>
            <input type="text"  placeholder="Cargo do usuário"/>
          </div>

          <div className="input-box">
            <label>Telefone: </label>
            <input type="tel"  placeholder="Telefone do usuário"/>
            <small>Format: (99)99999-9999</small>
          </div>

          <div className="input-box">
            <label>Senha: </label>
            <input type="password"  placeholder="Senha"/>
          </div>
        </form>

        <button className="login">
          <Link href={"/"}>Finalizar Cadastro</Link>
        </button> 
      </section>
      
      
    </>
  );
}
