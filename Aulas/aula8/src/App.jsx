import { useState } from "react";
import ProductCard from "./ProductCard";

export default function App() {
  const [contador, setContador] = useState(0);

  const listaProdutos = [
    {id: 1, nome: "Teclado Razer", valor: 455.56},
    {id: 2, nome: "Mouse Corsair", valor: 148.59},
    {id: 3, nome: "PC Gamer", valor: 4414.55},
    {id: 4, nome: "Teclado Multilaser", valor: 987.55},
    {id: 5, nome: "PC da Positivo", valor: 784.55},

  ]

  function incrementar () {
    //paralelo
    console.log(contador)
  }

  return (
    <div className="container">
      <h1>Contador</h1>
      <h3>{contador}</h3>
      <button onClick={incrementar}>
        Incrementar
      </button>
      <hr />
      <h4>Lista de Produtos</h4>
      <section>
      {listaProdutos
        .map(produto => <ProductCard produto={produto}/>)
      }
      </section>
    </div>
  )
}