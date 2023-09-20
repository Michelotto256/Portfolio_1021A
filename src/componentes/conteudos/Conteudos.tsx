import './Conteudos.css'

type ConteudoProps = {
    titulo:string,
    descrição:string,
    imagem:string
}

function Conteudo(props:ConteudoProps){
    return(
        
        <div className="conteudo-content">

            <div className="foto-conteudo">
                <img className='img-conteudo' src={props.imagem} alt="" />
            </div>

            <div className="text-conteudo">
                <h1>{props.titulo}</h1>
                <p className="descrição">{props.descrição}</p>
            </div>
        </div>
    )
}
export default Conteudo