export default function Header(props) {
    return(
        <header>
        <h1 className={`${props.habilitado ? "ativo" : "inativo"}`}>Fórmula 1 não é facil</h1>

         <h1>Formula 1 não é pra todos</h1>

        <p>Quantidade de posts: {props.quantidadePosts}</p>
        </header>
    )
}