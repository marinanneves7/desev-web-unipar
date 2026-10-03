import "./Article.css"

export default function Article() {
    return(
        <article id="artigo" className="titulo">
            <header>
                <h2>Como Criar Dashboards Eficientes no Power BI</h2>
                <p>Publicado por <strong>Marina Nunes</strong> em <time>07 de Setembro de 2026</time></p>
            </header>

            <section className="texto-artigo">
                <p>
                    A visualização de dados é uma das etapas mais cruciais no processo de análise de dados. 
                    Um dashboard bem estruturado não serve apenas para mostrar métricas, mas para contar uma história clara e apoiar tomadas de decisão estratégicas.
                </p>

                <h3>1. Escolha as Cores e o Contraste Corretos</h3>
                <p>
                    Evite poluição visual usando paletas de cores neutras e destacando apenas as informações mais importantes com cores de acento.
                </p>

                <h3>2. Hierarquia Visual das Informações</h3>
                <p>
                    Posicione os indicadores principais (KPIs) na parte superior esquerda da tela, pois é onde os olhos costumam iniciar a leitura da página.
                </p>
            </section>

            <section id="midia" className="bloco-video">
                <h3>Vídeo Explicativo</h3>
                <p>Confira abaixo uma introdução prática ao Power BI:</p>
                <iframe 
                    src="https://www.youtube.com/embed/ZIoOAsfKzVM" 
                    title="Aprenda Power BI em 10 Minutos">
                </iframe>
            </section>
        </article>
    );
}