import "./Campo.css"

export default function CampoInput(props) {
    return(
        <div className="campo">
            <label htmlFor="nome">{props.label}</label>
            <input type={props.type} id="nome" name={props.name} required />
        </div>
    );
}