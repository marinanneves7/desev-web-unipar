import "./App.css"
import Header from "./components/Header";

export default function App() {
  const qtdPosts = 16;
  const possuiAssinatura = true ;


  return(
    <main id="container">
      <Header habilitado={possuiAssinatura} qtdPosts={16} />
      <section>
          <h1>Nossos últimos posts</h1>
          <article>
              <h1>Ferrari nao ganha nunca</h1>
              <p>Leclerc ta lascado, bate toda a corrida e o Hamilton ja ta podendo aposentar</p>
          </article>
          <article> 
              <h1>Verstappen nao pega 1° faz um ano quase</h1>
              <p>Max Verstappen ta sem ganhar em primeiro lugar faz cota, depois que virou pai, ficou com medo de acelerar</p>
          </article> 
          <article>
              <h1>Antonelli tem 18 anos</h1>
              <p>O Antonelli tem 18 anos e ja ta na mercedes, fazendo mais do que cara que ta na formula 1 há um bom tempo, tipo o Stroll que nao faz nada</p>
          </article> 
          <article>
              <h1>Ferrari nao ganha nunca</h1>
              <p>Leclerc ta lascado, bate toda a corrida e o Hamilton ja ta podendo aposentar</p>
          </article>
          <article>
              <h1>Verstappen nao pega 1° faz um ano quase</h1>
              <p>Max Verstappen ta sem ganhar em primeiro lugar faz cota, depois que virou pai, ficou com medo de acelerar</p>
          </article> 
          <article>
              <h1>Antonelli tem 18 anos</h1>
              <p>O Antonelli tem 18 anos e ja ta na mercedes, fazendo mais do que cara que ta na formula 1 há um bom tempo, tipo o Stroll que nao faz nada</p>
          </article> 
          <article>
              <h1>Ferrari nao ganha nunca</h1>
              <p>Leclerc ta lascado, bate toda a corrida e o Hamilton ja ta podendo aposentar</p>
          </article>
          <article>
              <h1>Verstappen nao pega 1° faz um ano quase</h1>
              <p>Max Verstappen ta sem ganhar em primeiro lugar faz cota, depois que virou pai, ficou com medo de acelerar</p>
          </article> 
          <article>
              <h1>Antonelli tem 18 anos</h1>
              <p>O Antonelli tem 18 anos e ja ta na mercedes, fazendo mais do que cara que ta na formula 1 há um bom tempo, tipo o Stroll que nao faz nada</p>
          </article> 
      </section>
    </main>
  )
}