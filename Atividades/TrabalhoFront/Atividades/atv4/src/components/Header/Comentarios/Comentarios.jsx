import CampoInput from "../Campo/CampoInput";
import "./Comentarios.css"

export default function Comentarios() {
    return (
        <section id="comentarios" className="cartao">
            <h3>Deixe seu Comentário</h3>
            <form action="#" method="POST" class="formulario">

                <CampoInput label="Nome Completo:" type="text" name="nome"/>

                <CampoInput label="E-mail para contato:" type="email" name="email"/>

                <div className="campo">
                    <label for="avaliacao">Como você avalia este artigo?</label>
                    <select id="avaliacao" name="avaliacao"> 
                        <option value="5">Excelente</option>
                        <option value="4">Muito Bom</option>
                        <option value="3">Bom</option>
                        <option value="2">Razoável</option>
                        <option value="1">Ruim</option>
                    </select>
                </div>

                <div className="campo">
                    <label for="mensagem">Seu Comentário:</label>
                    <textarea id="mensagem" name="mensagem" required></textarea>
                </div>

                <button type="submit">Enviar Comentário</button>
            </form>
        </section>

    );
}