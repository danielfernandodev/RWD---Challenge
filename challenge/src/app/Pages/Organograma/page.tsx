'use client'
import Image from "next/image";
import Link from "next/link";
import "./Organograma.css"


export default function Organograma() {
  return (
    <>
      <div className="items_Organograma">
        <h1>Organograma</h1>
        <Image src={"/assets/organograma.png"} alt="" width={1000} height={1000}/>
      </div>
      
    </>
  );
}
