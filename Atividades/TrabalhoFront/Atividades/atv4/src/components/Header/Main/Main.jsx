import Article from "../Article/Article";
import Comentarios from "../Comentarios/Comentarios";
import "./Main.css"
import Footer from "../Footer/Footer";

export default function Main() {
    return (
        <main className="conteudo">
            <Article />
            <Comentarios />
        </main>
    );
}