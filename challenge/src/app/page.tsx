'use client'
import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <>
      <section className="Home_section">
      <Image src={"/assets/landing page 1.svg"} alt="" width={100} height={100} />
        <div className="Home_text">
          <h1>Entregue sucesso agora com o Salesforce Customer 360.</h1>
          <p>O Customer 360 é a nossa suíte 
de produtos e serviços que ajuda 
98% dos clientes a alcançar ou 
superar suas metas de ROI.</p>
        </div>
       
      </section>

      <section className="Home_section">
        <Image src={"/assets/landing page 2.svg"} alt="" width={500} height={100} />
        <div className="Home_text">
          <h1>O que há de novo na Salesforce?</h1>
          <p>Conheça o Salesforce Starter o pacote de CRM simples e poderoso.<br></br>Encontre uma solução de IA adaptada às suas necessidades de negócios.<br></br> Expanda sua pequena empresa com um CRM projetado para você.</p>
        </div>
      </section>

      <section className="Home_section">
        <div className="Home_text">
          <h1>Saiba como o Salesforce ajuda você a trabalhar de maneira mais inteligente e a crescer com mais rapidez.</h1>
          <p>Pequenas empresas: Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo. <br></br>
Vendas: Feche mais negócios e acelere o crescimento com o CRM nº1.<br></br> 
Atendimento: Gaste menos com serviços escaláveis que os clientes adoram.</p>
        </div>
        <Image src={"/assets/landing page 3.svg"} alt="" width={100} height={100} />
      </section>


      <section className="Home_section">
        <div className="Home_text">
          <h1>Encontre inovações para qualquer setor de indústria.</h1>
          <p>Seja qual for a sua indústria, oferecemos soluções para modernizar o seu negócio, economizar tempo e reduzir custos.</p>
        </div>
        <Image src={"/assets/landing page 4.jpeg"} alt="" width={500} height={500} />
      </section>

      <section className="Home_section">
        <Image src={"/assets/landing page 5.svg"} alt="" width={100} height={100} />
        <div className="Home_text">
          <h1>O que é CRM?</h1>
          <p>Aprenda tudo sobre o CRM, como unificar todas as suas equipes e como impulsionar o crescimento e a produtividade em toda a sua empresa.</p>
        </div>
      </section>
      
      <section className="Home_section">
      <Image src={"/assets/landing page 6.svg"} alt="" width={100} height={100} />
        <div className="Home_text">
          <h1>Aprenda habilidades valiosas gratuitamente com o Trailhead.</h1>
          <p>Siga os caminhos de aprendizado guiados e aprenda na prática as habilidades interpessoais, digitais e do Salesforce de qualquer lugar.</p>
        </div>
        
      </section>

    </>
  );
}
