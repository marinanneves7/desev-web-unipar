import "./header.css"

export default function Header() {
    return (
        <header className="topo">
           <h1>Marina's blog</h1>
            <nav className="menu">
                <ul>
                    <li><a href="#artigo">Artigo</a></li>
                    <li><a href="#midia">Vídeo</a></li>
                    <li><a href="#comentarios">Comentários</a></li>
                </ul>
            </nav>
        </header>
    );
}